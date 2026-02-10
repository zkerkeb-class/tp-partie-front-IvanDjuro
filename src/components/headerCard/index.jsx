import "./index.css";

const HeaderCard = ({ name, id}) => {


    return (
        <div className="poke-card-header">
            <h3 className="poke-name">{name}</h3>
            <span className="poke-id">#{String(id).padStart(3, '0')}</span>

        </div>
    );
}

export default HeaderCard;