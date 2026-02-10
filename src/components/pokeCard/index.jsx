import { useEffect, useRef } from "react";
import { getLocalizedName } from "../../utils/getLocalizedName.js";
import HeaderCard from "../headerCard";
import StatCard from "../statCard";
import TypesCard from "../typesCard";

import "./index.css"        

const PokeCard = ({ pokemon, language }) => {

    const audioRef = useRef(null);

    useEffect   (() => {
        console.log(pokemon);

    }, [pokemon]);


    const handlerClick = (e) => {
        if(e.shiftKey){
            e.preventDefault(); 
            e.stopPropagation(); 
            crying();
        }
    }

    const crying = async () => {
        try {
            if (!audioRef.current) {
                audioRef.current = new Audio(pokemon.cry);
                audioRef.current.preload = "auto";
                audioRef.current.volume = 1;
            } else {
                audioRef.current.currentTime = 0;
            }
            await audioRef.current.play();
        } catch (e) {
            console.error("Impossible de jouer le son:", e);
        }
    }
    return (
            <div className={`poke-card type-${pokemon.type[0].toLowerCase()}`} onClick={handlerClick}>
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