import "./index.css";
import { t } from "../../i18n/ui.js";

const ImageEditor = ({ language = "french", imageUrl, onImageUpload, onImageUrlChange }) => {
    return (
        <div className="edit-section">
            <h3>{t(language, "imageSection")}</h3>

            <div className="image-upload-zone">
                <input
                    type="file"
                    accept="image/*"
                    onChange={onImageUpload}
                    className="file-input"
                    id="image-upload"
                />
                <label htmlFor="image-upload" className="file-label">
                    {t(language, "uploadImage")}
                </label>
                <span className="file-hint">{t(language, "or")}</span>
            </div>

            <input
                type="text"
                value={imageUrl}
                onChange={(e) => onImageUrlChange(e.target.value)}
                className="edit-input-large"
                placeholder={t(language, "imageUrlPlaceholder")}
            />
        </div>
    );
};

export default ImageEditor;
