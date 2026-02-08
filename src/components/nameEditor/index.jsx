import "./index.css";
import { t } from "../../i18n/ui.js";

const NameEditor = ({ language = "french", name, onNameChange }) => {
    return (
        <div className="edit-section">
            <h3>{t(language, "nameSection")}</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
                className="edit-input-large"
                placeholder={t(language, "namePlaceholder")}
            />
        </div>
    );
};

export default NameEditor;
