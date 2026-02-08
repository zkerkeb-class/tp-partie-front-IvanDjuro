import { useState, useEffect, useCallback, useRef } from "react";
import PokeCard from "../pokeCard";
import PageList from "../pageList";
import FilterBar from "../filterBar";
import { Link } from "react-router";
import "./index.css";

const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("french");
  
  // Filtres temporaires (ce que l'utilisateur tape)
  const [tempFilters, setTempFilters] = useState({
    name: "",
    type: "",
    minHP: "",
    maxHP: ""
  });
  
  // Filtres appliqués (utilisés pour la requête)
  const [appliedFilters, setAppliedFilters] = useState({
    name: "",
    type: "",
    minHP: "",
    maxHP: ""
  });
  
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  
  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      
      abortControllerRef.current = new AbortController();
      
      try {
        setLoading(true);
        
        const params = new URLSearchParams();
        params.append('lang', language);
        params.append('page', page);
        params.append('sortBy', sortBy);
        params.append('order', sortOrder);
        
        if (appliedFilters.name) params.append('name', appliedFilters.name);
        if (appliedFilters.type) params.append('type', appliedFilters.type);
        if (appliedFilters.minHP) params.append('minHP', appliedFilters.minHP);
        if (appliedFilters.maxHP) params.append('maxHP', appliedFilters.maxHP);
        
        const res = await fetch(`http://localhost:3000/pokemons?${params}`, {
          signal: abortControllerRef.current.signal
        });
        const data = await res.json();

        setPokemons(data.data);
        setPagination(data.pagination);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Erreur:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
    
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [page, language, sortBy, sortOrder, appliedFilters]);

  const handleLanguageChange = useCallback((newLang) => {
    setLanguage(newLang);
    setPage(1);
  }, []);

  const handleFilterChange = useCallback((newFilters) => {
    setTempFilters(newFilters);
  }, []);

  const handleApplyFilters = useCallback(() => {
    setAppliedFilters(tempFilters);
    setPage(1);
  }, [tempFilters]);

  const handleSortChange = useCallback((newSort) => {
    if (newSort === sortBy) {
      // Si on clique sur le même tri, on inverse l'ordre
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      // Nouveau tri : toujours commencer en asc
      setSortBy(newSort);
      setSortOrder('asc');
    }
    setPage(1);
  }, [sortBy]);

  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  if (loading) return <p className="loading">⚡ Chargement des Pokémon...</p>;

  return (
    <div className="poke-container">
      <div className="controls-top">
        <FilterBar
          filters={tempFilters}
          onFilterChange={handleFilterChange}
          onApplyFilters={handleApplyFilters}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
          language={language}
          onLanguageChange={handleLanguageChange}
        />
        
        <PageList
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      </div>

      <ul className="poke-list">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`${'http://localhost:5173/pokemons/' + language + '/' + pokemon.id}`}>
            <PokeCard pokemon={pokemon} />
          </Link>
        ))}
      </ul>

      <PageList
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PokeList;