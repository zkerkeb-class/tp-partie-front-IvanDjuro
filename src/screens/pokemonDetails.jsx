import { useNavigate, useParams } from "react-router";
import usePokemon from "../hooks/usePokemon.jsx";
import usePokemonEditor from "../hooks/usePokemonEditor.jsx";
import NavigationBar from "../components/navigationBar";
import ErrorMessage from "../components/errorMessage";
import InfoPanel from "../components/infoPanel";
import EditPanel from "../components/editPanel";
import PokeCard from "../components/pokeCard";
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

    const goBack = () => navigate(-1);

    // Liste de tous les types possibles
    const allTypes = [
        "Normal", "Fire", "Water", "Electric", "Grass", "Ice", 
        "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", 
        "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
    ];

    // États de chargement et erreur
    if (loading) {
        return (
            <div className="loading-container">
                <p>Chargement des données du Pokémon...</p>
            </div>
        );
    }

    if (!pokeState || !pokeState.name) {
        return (
            <div className="error-container">
                <p>Pokémon introuvable.</p>
                <button onClick={goBack} className="btn-back">Retour</button>
            </div>
        );
    }

    return (
        <div className="pokemon-details-page">
            {/* Barre de navigation */}
            <NavigationBar
                isEditing={isEditing}
                isSaving={isSaving}
                onBack={goBack}
                onEdit={startEditing}
                onDelete={deletePokemon}
                onSave={saveChanges}
                onCancel={cancelEditing}
            />

            {/* Message d'erreur */}
            <ErrorMessage message={error} />

            {/* Layout principal : Carte à gauche (1/3) + Édition à droite (2/3) */}
            <div className="details-layout">
                {/* GAUCHE : Carte Pokémon (preview) */}
                <div className="card-preview-section">
                    <PokeCard 
                        pokemon={pokeState} 
                        language={params.lang}
                    />
                </div>

                {/* DROITE : Panneau d'info ou d'édition */}
                <div className="edit-panel-section">
                    {!isEditing ? (
                        <InfoPanel pokemon={pokeState} />
                    ) : (
                        <EditPanel
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