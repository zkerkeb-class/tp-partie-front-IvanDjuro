import { useEffect } from "react";
import HeaderCard from "../headerCard";
import StatCard from "../statCard";
import TypesCard from "../typesCard";
import "./index.css"

const PokeCard = ({ pokemon }) => {

    useEffect   (() => {
        console.log(pokemon);

    }, [pokemon]);


    return (
        <div className={`poke-card type-${pokemon.type[0].toLowerCase()}`}>
            <div className="poke-card-content">
                {/* Header avec nom et ID */}
                <HeaderCard name={pokemon.name} id={pokemon.id}/>
                {/* Image du Pokémon */}
                <div className="poke-image-container">
                    <img src={pokemon.image} alt={pokemon.name} className="poke-image" />
                </div>
                
                <TypesCard types={pokemon.type}/>

                <StatCard pokemon={pokemon} />
            </div>
        </div>
    );
}

export default PokeCard;