import "./index.css";

const TypeEditor = ({ types, allTypes, onAddType, onRemoveType }) => {
    return (
        <div className="edit-section">
            <h3>🏷️ Types</h3>
            <div className="types-edit-container">
                {types.map(type => (
                    <div key={type} className="type-tag">
                        <span>{type}</span>
                        <button 
                            onClick={() => onRemoveType(type)}
                            className="type-remove"
                            disabled={types.length === 1}
                            title="Supprimer ce type"
                        >
                            ✖
                        </button>
                    </div>
                ))}
            </div>
            
            {types.length < 2 && (
                <select 
                    onChange={(e) => {
                        onAddType(e.target.value);
                        e.target.value = "";
                    }}
                    className="type-select-modern"
                >
                    <option value="">+ Ajouter un type</option>
                    {allTypes
                        .filter(t => !types.includes(t))
                        .map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))
                    }
                </select>
            )}
        </div>
    );
};

export default TypeEditor;