import { useEffect } from "react";
import { getLocalizedName } from "../../utils/getLocalizedName.js";
import HeaderCard from "../headerCard";
import StatCard from "../statCard";
import TypesCard from "../typesCard";

import "./index.css"        

const PokeCard = ({ pokemon, language }) => {

    useEffect   (() => {
        console.log(pokemon);

    }, [pokemon]);


    return (
            <div className={`poke-card type-${pokemon.type[0].toLowerCase()}`}>
                <div className="poke-card-content">

                    <HeaderCard name={getLocalizedName(pokemon.name, language)} id={pokemon.id}/>

                    <div className="poke-image-container">
                        <img src={pokemon.image} alt={getLocalizedName(pokemon.name, language)} className="poke-image" />
                    </div>
                    
                    <TypesCard types={pokemon.type}/>

                    <StatCard pokemon={pokemon} />
                </div>
            </div>
    );
}

export default PokeCard;