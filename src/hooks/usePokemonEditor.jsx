import { useState } from "react";

const usePokemonEditor = (pokemon, params, setPokemonData, navigate) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedPokemon, setEditedPokemon] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // Démarrer l'édition
    const startEditing = () => {
        const currentLang = params.lang || 'english';
        setEditedPokemon({
            name: pokemon.name,
            type: [...pokemon.type],
            base: { ...pokemon.base },
            image: pokemon.image
        });
        setImagePreview(pokemon.image);
        setIsEditing(true);
        setError(null);
    };

    // Annuler l'édition
    const cancelEditing = () => {
        setIsEditing(false);
        setEditedPokemon(null);
        setError(null);
        setImagePreview(null);
    };

    // Mettre à jour le nom
    const updateName = (value) => {
        setEditedPokemon(prev => ({
            ...prev,
            name: value
        }));
    };

    // Mettre à jour une statistique
    const updateStat = (stat, value) => {
        const numValue = parseInt(value) || 0;
        setEditedPokemon(prev => ({
            ...prev,
            base: {
                ...prev.base,
                [stat]: numValue
            }
        }));
    };

    // Upload d'image et conversion en base64
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setError('Veuillez sélectionner une image valide');
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                setError('L\'image ne doit pas dépasser 5MB');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setImagePreview(base64String);
                setEditedPokemon(prev => ({
                    ...prev,
                    image: base64String
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Mettre à jour l'URL de l'image
    const updateImageUrl = (value) => {
        setImagePreview(value);
        setEditedPokemon(prev => ({
            ...prev,
            image: value
        }));
    };

    // Ajouter un type
    const addType = (newType) => {
        if (newType && !editedPokemon.type.includes(newType)) {
            setEditedPokemon(prev => ({
                ...prev,
                type: [...prev.type, newType]
            }));
        }
    };

    // Supprimer un type
    const removeType = (typeToRemove) => {
        if (editedPokemon.type.length > 1) {
            setEditedPokemon(prev => ({
                ...prev,
                type: prev.type.filter(t => t !== typeToRemove)
            }));
        }
    };

    // Sauvegarder les modifications
    const saveChanges = async () => {
        setIsSaving(true);
        setError(null);

        try {
            const currentLang = params.lang || 'english';
            const updateData = {
                type: editedPokemon.type,
                base: editedPokemon.base,
                image: editedPokemon.image,
                name: {
                    [currentLang]: editedPokemon.name
                }
            };

            const response = await fetch(`http://localhost:3000/pokemons/${params.id}?lang=${currentLang}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erreur lors de la sauvegarde');
            }

            const data = await response.json();
            
            if (setPokemonData) {
                setPokemonData(data.pokemon);
            }
            
            setIsEditing(false);
            setEditedPokemon(null);
            setImagePreview(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSaving(false);
        }
    };

    // Supprimer le Pokémon
    const deletePokemon = async () => {
        if (!window.confirm(`Êtes-vous sûr de vouloir supprimer ${pokemon.name} ?\nCette action est irréversible.`)) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/pokemons/${params.id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la suppression');
            }

            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return {
        isEditing,
        editedPokemon,
        isSaving,
        error,
        imagePreview,
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
    };
};

export default usePokemonEditor;