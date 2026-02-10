import "./index.css";
import { t } from "../../i18n/ui.js";

const CreateNameFields = ({ language = "french", names, onNameChange }) => {
    return (
        <div className="edit-section">
            <h3>{t(language, "createNamesTitle")}</h3>
            <div className="name-fields-grid">
                <div className="name-field">
                    <label>{t(language, "english")} *</label>
                    <input
                        type="text"
                        value={names.english}
                        onChange={(e) => onNameChange('english', e.target.value)}
                        className="edit-input-large"
                        placeholder="Ex: Bulbasaur"
                        required
                    />
                </div>

                <div className="name-field">
                    <label>{t(language, "frenchLabel")} *</label>
                    <input
                        type="text"
                        value={names.french}
                        onChange={(e) => onNameChange('french', e.target.value)}
                        className="edit-input-large"
                        placeholder="Ex: Bulbizarre"
                        required
                    />
                </div>

                <div className="name-field">
                    <label>{t(language, "japanese")} *</label>
                    <input
                        type="text"
                        value={names.japanese}
                        onChange={(e) => onNameChange('japanese', e.target.value)}
                        className="edit-input-large"
                        placeholder="Ex: フシギダネ"
                        required
                    />
                </div>

                <div className="name-field">
                    <label>{t(language, "chinese")} *</label>
                    <input
                        type="text"
                        value={names.chinese}
                        onChange={(e) => onNameChange('chinese', e.target.value)}
                        className="edit-input-large"
                        placeholder="Ex: 妙蛙种子"
                        required
                    />
                </div>
            </div>
            <p className="field-hint">{t(language, "requiredHint")}</p>
        </div>
    );
};

export default CreateNameFields;
