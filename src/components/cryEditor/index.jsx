import "./index.css";
import { t } from "../../i18n/ui.js";

const CryEditor = ({ language = "french", cryUrl, onCryUpload, onCryUrlChange }) => {
    return (
        <div className="edit-section">
            <h3>{t(language, "crySection")}</h3>

            <div className="audio-upload-zone">
                <input
                    type="file"
                    accept="audio/*"
                    onChange={onCryUpload}
                    className="file-input"
                    id="cry-upload"
                />
                <label htmlFor="cry-upload" className="file-label">
                    {t(language, "uploadAudio")}
                </label>
                <span className="file-hint">{t(language, "or")}</span>
            </div>

            <input
                type="text"
                value={cryUrl}
                onChange={(e) => onCryUrlChange(e.target.value)}
                className="edit-input-large"
                placeholder={t(language, "cryUrlPlaceholder")}
            />

            {cryUrl && (
                <div className="audio-preview">
                    <audio controls src={cryUrl} className="audio-player">
                        {t(language, "audioNotSupported")}
                    </audio>
                </div>
            )}
        </div>
    );
};

export default CryEditor;
