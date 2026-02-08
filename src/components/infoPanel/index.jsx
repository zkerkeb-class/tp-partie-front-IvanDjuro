import "./index.css";

const InfoPanel = ({ pokemon }) => {
    return (
        <div className="info-panel">
            <h2>Informations du Pokémon</h2>
            
            <div className="info-card">
                <div className="info-row">
                    <span className="info-label">Numéro</span>
                    <span className="info-value">#{String(pokemon.id).padStart(3, '0')}</span>
                </div>
                <div className="info-row">
                    <span className="info-label">Nom</span>
                    <span className="info-value">{pokemon.name}</span>
                </div>
                <div className="info-row">
                    <span className="info-label">Type(s)</span>
                    <span className="info-value">{pokemon.type.join(', ')}</span>
                </div>
            </div>

            <div className="info-card">
                <h3>Statistiques</h3>
                {Object.entries(pokemon.base).map(([stat, value]) => (
                    <div key={stat} className="info-row">
                        <span className="info-label">{stat}</span>
                        <span className="info-value">{value}</span>
                    </div>
                ))}
            </div>

            <div className="help-text">
                💡 Cliquez sur "Modifier" pour éditer ce Pokémon
            </div>
        </div>
    );
};

export default InfoPanel;