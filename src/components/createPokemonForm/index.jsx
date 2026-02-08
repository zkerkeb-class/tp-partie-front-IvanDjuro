import CreateNameFields from "../createNameFields";
import ImageEditor from "../imageEditor";
import CryEditor from "../cryEditor";
import TypeEditor from "../typeEditor";
import StatsEditor from "../statsEditor";
import "./index.css";

const CreatePokemonForm = ({ 
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
            <h2>✨ Créer un nouveau Pokémon</h2>

            <CreateNameFields 
                names={newPokemon.name}
                onNameChange={onNameChange}
            />

            <ImageEditor 
                imageUrl={newPokemon.image}
                onImageUpload={onImageUpload}
                onImageUrlChange={onImageUrlChange}
            />

            <CryEditor 
                cryUrl={newPokemon.cry}
                onCryUpload={onCryUpload}
                onCryUrlChange={onCryUrlChange}
            />

            <TypeEditor 
                types={newPokemon.type}
                allTypes={allTypes}
                onAddType={onAddType}
                onRemoveType={onRemoveType}
            />

            <StatsEditor 
                stats={newPokemon.base}
                onStatChange={onStatChange}
            />
        </div>
    );
};

export default CreatePokemonForm;