import "./index.css"

const TypesCard = ({ types }) => {

    return (
        <div className="poke-types">
            {types.map(type => (
                <img className="type-badge" key={type} src={`http://localhost:3000/assets/types/${type}.png`} alt={type} />
            ))};

        </div>
    );
}

export default TypesCard;