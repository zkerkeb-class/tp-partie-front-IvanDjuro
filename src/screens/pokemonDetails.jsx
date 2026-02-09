import { useNavigate, useParams } from "react-router";
import usePokemon from "../hooks/usePokemon.jsx";
import usePokemonEditor from "../hooks/usePokemonEditor.jsx";
import NavigationBar from "../components/navigationBar";
import ErrorMessage from "../components/errorMessage";
import InfoPanel from "../components/infoPanel";
import EditPanel from "../components/editPanel";
import PokeCard from "../components/pokeCard";
import { t } from "../i18n/ui.js";
import "./pokemonDetails.css";

const PokemonDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { pokeState, loading, setPokemonData } = usePokemon(params.id, params.lang);

    const {
        isEditing,
        editedPokemon,
        isSaving,
        error,
        startEditing,
        cancelEditing,
        updateName,
        updateStat,
        handleImageUpload,
        updateImageUrl,
        addType,
        removeType,
        saveChanges,
        deletePokemon
    } = usePokemonEditor(pokeState, params, setPokemonData, navigate);

    const goBack = () => navigate("/pokemons");

    const allTypes = [
        "Normal", "Fire", "Water", "Electric", "Grass", "Ice", 
        "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", 
        "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
    ];

    if (loading) {
        return (
            <div className="loading-container">
                <p>{t(params.lang, "loadingDetails")}</p>
            </div>
        );
    }

    if (!pokeState || !pokeState.name) {
        return (
            <div className="error-container">
                <p>{t(params.lang, "notFound")}</p>
                <button onClick={goBack} className="btn-back">{t(params.lang, "back")}</button>
            </div>
        );
    }

    return (
        <div className="pokemon-details-page">
            <NavigationBar
                language={params.lang}
                isEditing={isEditing}
                isSaving={isSaving}
                onBack={goBack}
                onEdit={startEditing}
                onDelete={deletePokemon}
                onSave={saveChanges}
                onCancel={cancelEditing}
            />

            <ErrorMessage message={error} />

            <div className="details-layout">
                <div className="card-preview-section">
                    <PokeCard 
                        pokemon={pokeState} 
                        language={params.lang}
                    />
                </div>

                <div className="edit-panel-section">
                    {!isEditing ? (
                        <InfoPanel pokemon={pokeState} language={params.lang} />
                    ) : (
                        <EditPanel
                            language={params.lang}
                            editedPokemon={editedPokemon}
                            allTypes={allTypes}
                            onNameChange={updateName}
                            onImageUpload={handleImageUpload}
                            onImageUrlChange={updateImageUrl}
                            onAddType={addType}
                            onRemoveType={removeType}
                            onStatChange={updateStat}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
