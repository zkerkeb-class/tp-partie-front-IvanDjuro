import "./index.css";

const StatsEditor = ({ stats, onStatChange }) => {
    return (
        <div className="edit-section">
            <h3>📊 Statistiques</h3>
            <div className="stats-edit-grid">
                {Object.entries(stats).map(([stat, value]) => (
                    <div key={stat} className="stat-edit-row">
                        <label>{stat}</label>
                        <input
                            type="number"
                            value={value}
                            onChange={(e) => onStatChange(stat, e.target.value)}
                            className="stat-input-modern"
                            min="1"
                            max="255"
                        />
                        <div className="stat-bar-mini">
                            <div 
                                className="stat-fill-mini"
                                style={{width: `${(value / 255) * 100}%`}}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsEditor;