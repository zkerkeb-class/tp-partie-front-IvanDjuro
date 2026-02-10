import "./index.css";
import { t } from "../../i18n/ui.js";

const StatsEditor = ({ language = "french", stats, onStatChange }) => {
    return (
        <div className="edit-section">
            <h3>{t(language, "statsSection")}</h3>
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
