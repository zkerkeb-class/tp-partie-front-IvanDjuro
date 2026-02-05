import { useState, useEffect } from "react";
import PokeCard from "../pokeCard";
import "./index.css";

const PokeList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/?lang=french")
            .then((response) => response.json())
            .then((data) => {
                console.log("Données reçues:", data.data);
                setPokemons(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Chargement...</p>
    }

    return (
        <div>
            <h2>Liste des Pokémon</h2>
            <ul className="poke-list">
                {pokemons.map((pokemon) => (
                    <PokeCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </ul>
        </div>
    );
};

export default PokeList;
