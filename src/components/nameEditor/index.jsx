import "./index.css";

const NameEditor = ({ name, onNameChange }) => {
    return (
        <div className="edit-section">
            <h3>📝 Nom</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
                className="edit-input-large"
                placeholder="Nom du Pokémon"
            />
        </div>
    );
};

export default NameEditor;