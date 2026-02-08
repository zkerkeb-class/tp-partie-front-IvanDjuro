import "./index.css";
import { t } from "../../i18n/ui.js";

const NavigationBar = ({ 
    language = "french",
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
            <button onClick={onBack} className="btn-back">{t(language, "back")}</button>
            <div className="action-buttons">
                {!isEditing ? (
                    <>
                        <button onClick={onEdit} className="btn-edit">{t(language, "edit")}</button>
                        <button onClick={onDelete} className="btn-delete">{t(language, "delete")}</button>
                    </>
                ) : (
                    <>
                        <button 
                            onClick={onSave} 
                            className="btn-save"
                            disabled={isSaving}
                        >
                            {isSaving ? t(language, "saving") : t(language, "save")}
                        </button>
                        <button 
                            onClick={onCancel} 
                            className="btn-cancel"
                            disabled={isSaving}
                        >
                            {t(language, "cancel")}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavigationBar;
