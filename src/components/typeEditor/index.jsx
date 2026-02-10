import "./index.css";
import { t } from "../../i18n/ui.js";

const TypeEditor = ({ language = "french", types, allTypes, onAddType, onRemoveType }) => {
    return (
        <div className="edit-section">
            <h3>{t(language, "typeSection")}</h3>
            <div className="types-edit-container">
                {types.map(type => (
                    <div key={type} className="type-tag">
                        <span>{type}</span>
                        <button 
                            onClick={() => onRemoveType(type)}
                            className="type-remove"
                            disabled={types.length === 1}
                            title={t(language, "removeTypeTitle")}
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
                    <option value="">{t(language, "addType")}</option>
                    {allTypes
                        .filter(tt => !types.includes(tt))
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
