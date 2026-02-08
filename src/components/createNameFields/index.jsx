import "./index.css";

const CreateNameFields = ({ names, onNameChange }) => {
    return (
        <div className="edit-section">
            <h3>📝 Noms (toutes les langues obligatoires)</h3>
            <div className="name-fields-grid">
                <div className="name-field">
                    <label>🇬🇧 Anglais *</label>
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
                    <label>🇫🇷 Français *</label>
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
                    <label>🇯🇵 Japonais *</label>
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
                    <label>🇨🇳 Chinois *</label>
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
            <p className="field-hint">* Tous les champs sont obligatoires</p>
        </div>
    );
};

export default CreateNameFields;