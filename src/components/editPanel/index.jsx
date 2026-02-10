import NameEditor from "../nameEditor";
import ImageEditor from "../imageEditor";
import TypeEditor from "../typeEditor";
import StatsEditor from "../statsEditor";
import { t } from "../../i18n/ui.js";
import "./index.css";

const EditPanel = ({ 
    language = "french",
    editedPokemon, 
    allTypes,
    onNameChange, 
    onImageUpload, 
    onImageUrlChange,
    onAddType,
    onRemoveType,
    onStatChange
}) => {
    return (
        <div className="edit-panel">
            <h2>{t(language, "editTitle")}</h2>

            <NameEditor 
                language={language}
                name={editedPokemon.name}
                onNameChange={onNameChange}
            />

            <ImageEditor 
                language={language}
                imageUrl={editedPokemon.image}
                onImageUpload={onImageUpload}
                onImageUrlChange={onImageUrlChange}
            />

            <TypeEditor 
                language={language}
                types={editedPokemon.type}
                allTypes={allTypes}
                onAddType={onAddType}
                onRemoveType={onRemoveType}
            />

            <StatsEditor 
                language={language}
                stats={editedPokemon.base}
                onStatChange={onStatChange}
            />
        </div>
    );
};

export default EditPanel;
