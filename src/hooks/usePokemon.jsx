import { useEffect, useState } from "react";

const usePokemon = (id, lang = "english") => {
    const [pokeState, setPokeState] = useState({});
    const [loading, setLoading] = useState(true);

        useEffect(() => {
            const url = `http://localhost:3000/pokemons/${id}?lang=${lang}`;
            setLoading(true);
            console.log("URL pour récupérer les détails du Pokémon:", url);
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setPokeState(data);
                    console.log("Détails du Pokémon reçus:", data);
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération des détails du Pokémon:", error);
                }).finally(() => {
                    setLoading(false);
                });
        }, [id]);

        
    /**
     * Fonction pour mettre à jour manuellement les données du Pokémon
     * Utile après une modification
     */
    const setPokemonData = (newData) => {
        setPokeState(prevState => ({
            ...prevState,
            ...newData,
            nameData: newData.name
        }));
    };
    
    return { pokeState, loading, setPokemonData };
}

export default usePokemon;