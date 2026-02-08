import { getLocalizedName } from "../../utils/getLocalizedName.js";
import { t } from "../../i18n/ui.js";
import "./index.css";

const InfoPanel = ({ pokemon, language = "french" }) => {
    return (
        <div className="info-panel">
            <h2>{t(language, "infoTitle")}</h2>

            <div className="info-card">
                <div className="info-row">
                    <span className="info-label">{t(language, "number")}</span>
                    <span className="info-value">#{String(pokemon.id).padStart(3, '0')}</span>
                </div>
                <div className="info-row">
                    <span className="info-label">{t(language, "name")}</span>
                    <span className="info-value">{getLocalizedName(pokemon.name, language)}</span>
                </div>
                <div className="info-row">
                    <span className="info-label">{t(language, "types")}</span>
                    <span className="info-value">{pokemon.type.join(', ')}</span>
                </div>
            </div>

            <div className="info-card">
                <h3>{t(language, "statsTitle")}</h3>
                {Object.entries(pokemon.base).map(([stat, value]) => (
                    <div key={stat} className="info-row">
                        <span className="info-label">{stat}</span>
                        <span className="info-value">{value}</span>
                    </div>
                ))}
            </div>

            <div className="help-text">
                {t(language, "helpEdit")}
            </div>
        </div>
    );
};

export default InfoPanel;
