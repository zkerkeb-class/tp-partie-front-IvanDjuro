import NameEditor from "../nameEditor";
import ImageEditor from "../imageEditor";
import TypeEditor from "../typeEditor";
import StatsEditor from "../statsEditor";
import "./index.css";

const EditPanel = ({ 
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
            <h2>Édition du Pokémon</h2>

            <NameEditor 
                name={editedPokemon.name}
                onNameChange={onNameChange}
            />

            <ImageEditor 
                imageUrl={editedPokemon.image}
                onImageUpload={onImageUpload}
                onImageUrlChange={onImageUrlChange}
            />

            <TypeEditor 
                types={editedPokemon.type}
                allTypes={allTypes}
                onAddType={onAddType}
                onRemoveType={onRemoveType}
            />

            <StatsEditor 
                stats={editedPokemon.base}
                onStatChange={onStatChange}
            />
        </div>
    );
};

export default EditPanel;