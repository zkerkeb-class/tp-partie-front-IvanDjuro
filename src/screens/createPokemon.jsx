import { useNavigate } from "react-router";
import usePokemonCreator from "../hooks/usePokemonCreator.jsx";
import NavigationBar from "../components/navigationBar";
import ErrorMessage from "../components/errorMessage";
import CreatePokemonForm from "../components/createPokemonForm";
import PokeCard from "../components/pokeCard/index.jsx";
import "./createPokemon.css";

const CreatePokemon = () => {
    const navigate = useNavigate();
    
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
    } = usePokemonCreator(navigate);

    const goBack = () => navigate("/");

    // Liste de tous les types possibles
    const allTypes = [
        "Normal", "Fire", "Water", "Electric", "Grass", "Ice", 
        "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", 
        "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"
    ];

    // Préparer le Pokémon pour la preview de la carte
    const previewPokemon = {
        id: 0, // ID temporaire pour la preview
        name: newPokemon.name.french || 'Nouveau Pokémon',
        type: newPokemon.type,
        base: newPokemon.base,
        image: newPokemon.image || 'http://localhost:3000/assets/pokemons/0.png'
    };

    return (
        <div className="create-pokemon-page">
            {/* Barre de navigation */}
            <NavigationBar
                isEditing={true}
                isSaving={isSaving}
                onBack={goBack}
                onEdit={() => {}}
                onDelete={resetForm}
                onSave={createPokemon}
                onCancel={goBack}
            />

            {/* Message d'erreur */}
            <ErrorMessage message={error} />

            {/* Layout principal : Carte à gauche (1/3) + Formulaire à droite (2/3) */}
            <div className="details-layout">
                {/* GAUCHE : Carte Pokémon (preview) */}
                <div className="card-preview-section">
                    <PokeCard 
                        pokemon={previewPokemon} 
                        language="french"
                    />
                    <div className="preview-hint">
                        👁️ Prévisualisation en temps réel
                    </div>
                </div>

                {/* DROITE : Formulaire de création */}
                <div className="edit-panel-section">
                    <CreatePokemonForm
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