import { useNavigate, useParams } from "react-router";
import usePokemonCreator from "../hooks/usePokemonCreator.jsx";
import NavigationBar from "../components/navigationBar";
import ErrorMessage from "../components/errorMessage";
import CreatePokemonForm from "../components/createPokemonForm";
import PokeCard from "../components/pokeCard/index.jsx";
import { t } from "../i18n/ui.js";
import "./createPokemon.css";

const CreatePokemon = () => {
    const navigate = useNavigate();
    const { lang } = useParams();

    const {
        newPokemon,
        isSaving,
        error,
        updateName,
        updateStat,
        handleImageUpload,
        updateImageUrl,
        handleCryUpload,
        updateCryUrl,
        addType,
        removeType,
        createPokemon,
        resetForm
    } = usePokemonCreator(navigate, lang);

    const goBack = () => navigate(-1);

    const allTypes = [
        "Normal", "Fire", "Water", "Electric", "Grass", "Ice", 
        "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", 
        "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
    ];

    const previewPokemon = {
        id: 0,
        name: (newPokemon.name?.[lang] || newPokemon.name?.french || newPokemon.name?.english || t(lang, "newPokemonFallback")),
        type: newPokemon.type,
        base: newPokemon.base,
        image: newPokemon.image || 'http://localhost:3000/assets/pokemons/0.png'
    };

    return (
        <div className="create-pokemon-page">
            <NavigationBar
                language={lang}
                isEditing={true}
                isSaving={isSaving}
                onBack={goBack}
                onEdit={() => {}}
                onDelete={resetForm}
                onSave={createPokemon}
                onCancel={goBack}
            />

            <ErrorMessage message={error} />

            <div className="details-layout">
                <div className="card-preview-section">
                    <PokeCard 
                        pokemon={previewPokemon} 
                        language={lang}
                    />
                    <div className="preview-hint">
                        {t(lang, "previewHint")}
                    </div>
                </div>

                <div className="edit-panel-section">
                    <CreatePokemonForm
                        language={lang}
                        newPokemon={newPokemon}
                        allTypes={allTypes}
                        onNameChange={updateName}
                        onImageUpload={handleImageUpload}
                        onImageUrlChange={updateImageUrl}
                        onCryUpload={handleCryUpload}
                        onCryUrlChange={updateCryUrl}
                        onAddType={addType}
                        onRemoveType={removeType}
                        onStatChange={updateStat}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreatePokemon;
