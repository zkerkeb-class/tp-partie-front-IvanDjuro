import CreateNameFields from "../createNameFields";
import ImageEditor from "../imageEditor";
import CryEditor from "../cryEditor";
import TypeEditor from "../typeEditor";
import StatsEditor from "../statsEditor";
import { t } from "../../i18n/ui.js";
import "./index.css";

const CreatePokemonForm = ({ 
    language = "french",
    newPokemon, 
    allTypes,
    onNameChange, 
    onImageUpload, 
    onImageUrlChange,
    onCryUpload,
    onCryUrlChange,
    onAddType,
    onRemoveType,
    onStatChange
}) => {
    return (
        <div className="edit-panel">
            <h2>{t(language, "createTitle")}</h2>

            <CreateNameFields 
                language={language}
                names={newPokemon.name}
                onNameChange={onNameChange}
            />

            <ImageEditor 
                language={language}
                imageUrl={newPokemon.image}
                onImageUpload={onImageUpload}
                onImageUrlChange={onImageUrlChange}
            />

            <CryEditor 
                language={language}
                cryUrl={newPokemon.cry}
                onCryUpload={onCryUpload}
                onCryUrlChange={onCryUrlChange}
            />

            <TypeEditor 
                language={language}
                types={newPokemon.type}
                allTypes={allTypes}
                onAddType={onAddType}
                onRemoveType={onRemoveType}
            />

            <StatsEditor 
                language={language}
                stats={newPokemon.base}
                onStatChange={onStatChange}
            />
        </div>
    );
};

export default CreatePokemonForm;
