import { useState } from "react";
import { getLocalizedName } from "../utils/getLocalizedName.js";
import { t } from "../i18n/ui.js";

const usePokemonEditor = (pokemon, params, setPokemonData, navigate) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedPokemon, setEditedPokemon] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const lang = params?.lang || "french";

    const startEditing = () => {
        setEditedPokemon({
            name: getLocalizedName(pokemon.name, lang),
            type: [...pokemon.type],
            base: { ...pokemon.base },
            image: pokemon.image
        });
        setImagePreview(pokemon.image);
        setIsEditing(true);
        setError(null);
    };

    const cancelEditing = () => {
        setIsEditing(false);
        setEditedPokemon(null);
        setError(null);
        setImagePreview(null);
    };

    const updateName = (value) => {
        setEditedPokemon(prev => ({
            ...prev,
            name: value
        }));
    };

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

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setError(t(lang, "invalidImage"));
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                setError(t(lang, "imageTooLarge"));
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

    const updateImageUrl = (value) => {
        setImagePreview(value);
        setEditedPokemon(prev => ({
            ...prev,
            image: value
        }));
    };

    const addType = (newType) => {
        if (newType && !editedPokemon.type.includes(newType)) {
            setEditedPokemon(prev => ({
                ...prev,
                type: [...prev.type, newType]
            }));
        }
    };

    const removeType = (typeToRemove) => {
        if (editedPokemon.type.length > 1) {
            setEditedPokemon(prev => ({
                ...prev,
                type: prev.type.filter(tt => tt !== typeToRemove)
            }));
        }
    };

    const saveChanges = async () => {
        setIsSaving(true);
        setError(null);

        try {
            const updateData = {
                type: editedPokemon.type,
                base: editedPokemon.base,
                image: editedPokemon.image,
                name: {
                    [lang]: editedPokemon.name
                }
            };

            const response = await fetch(`http://localhost:3000/pokemons/${params.id}?lang=${lang}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || t(lang, "saveErrorDefault"));
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

    const deletePokemon = async () => {
        const displayName = getLocalizedName(pokemon.name, lang);
        if (!window.confirm(t(lang, "confirmDelete", displayName))) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/pokemons/${params.id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(t(lang, "deleteErrorDefault"));
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
