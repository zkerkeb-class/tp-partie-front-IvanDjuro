import "./index.css";

const ImageEditor = ({ imageUrl, onImageUpload, onImageUrlChange }) => {
    return (
        <div className="edit-section">
            <h3>🖼️ Image</h3>
            
            <div className="image-upload-zone">
                <input
                    type="file"
                    accept="image/*"
                    onChange={onImageUpload}
                    className="file-input"
                    id="image-upload"
                />
                <label htmlFor="image-upload" className="file-label">
                    📤 Uploader une image
                </label>
                <span className="file-hint">ou</span>
            </div>

            <input
                type="text"
                value={imageUrl}
                onChange={(e) => onImageUrlChange(e.target.value)}
                className="edit-input-large"
                placeholder="URL de l'image"
            />
        </div>
    );
};

export default ImageEditor;