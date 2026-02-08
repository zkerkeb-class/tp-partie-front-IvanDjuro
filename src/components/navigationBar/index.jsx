import "./index.css";

const NavigationBar = ({ 
    isEditing, 
    isSaving, 
    onBack, 
    onEdit, 
    onDelete, 
    onSave, 
    onCancel 
}) => {
    return (
        <div className="top-nav">
            <button onClick={onBack} className="btn-back">← Retour</button>
            <div className="action-buttons">
                {!isEditing ? (
                    <>
                        <button onClick={onEdit} className="btn-edit">✏️ Modifier</button>
                        <button onClick={onDelete} className="btn-delete">🗑️ Supprimer</button>
                    </>
                ) : (
                    <>
                        <button 
                            onClick={onSave} 
                            className="btn-save"
                            disabled={isSaving}
                        >
                            {isSaving ? '💾 Sauvegarde...' : '💾 Sauvegarder'}
                        </button>
                        <button 
                            onClick={onCancel} 
                            className="btn-cancel"
                            disabled={isSaving}
                        >
                            ✖️ Annuler
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavigationBar;