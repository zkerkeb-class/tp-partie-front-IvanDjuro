import "./index.css";

const CryEditor = ({ cryUrl, onCryUpload, onCryUrlChange }) => {
    return (
        <div className="edit-section">
            <h3>🔊 Cri du Pokémon (optionnel)</h3>
            
            <div className="audio-upload-zone">
                <input
                    type="file"
                    accept="audio/*"
                    onChange={onCryUpload}
                    className="file-input"
                    id="cry-upload"
                />
                <label htmlFor="cry-upload" className="file-label">
                    📤 Uploader un fichier audio
                </label>
                <span className="file-hint">ou</span>
            </div>

            <input
                type="text"
                value={cryUrl}
                onChange={(e) => onCryUrlChange(e.target.value)}
                className="edit-input-large"
                placeholder="URL du fichier audio (optionnel, un cri par défaut sera utilisé)"
            />

            {cryUrl && (
                <div className="audio-preview">
                    <audio controls src={cryUrl} className="audio-player">
                        Votre navigateur ne supporte pas l'élément audio.
                    </audio>
                </div>
            )}
        </div>
    );
};

export default CryEditor;