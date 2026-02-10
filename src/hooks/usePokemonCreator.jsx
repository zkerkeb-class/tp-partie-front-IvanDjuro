import { useState } from "react";
import { t } from "../i18n/ui.js";

const usePokemonCreator = (navigate, language = "french") => {
    const [newPokemon, setNewPokemon] = useState({
        name: {
            english: '',
            japanese: '',
            chinese: '',
            french: ''
        },
        type: ['Normal'],
        base: {
            HP: 50,
            Attack: 50,
            Defense: 50,
            SpecialAttack: 50,
            SpecialDefense: 50,
            Speed: 50
        },
        image: '',
        cry: ''
    });

    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const updateName = (lang, value) => {
        setNewPokemon(prev => ({
            ...prev,
            name: {
                ...prev.name,
                [lang]: value
            }
        }));
    };

    const updateStat = (stat, value) => {
        const numValue = parseInt(value) || 0;
        setNewPokemon(prev => ({
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
                setError(t(language, "invalidImage"));
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                setError(t(language, "imageTooLarge"));
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setImagePreview(base64String);
                setNewPokemon(prev => ({
                    ...prev,
                    image: base64String
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const updateImageUrl = (value) => {
        setImagePreview(value);
        setNewPokemon(prev => ({
            ...prev,
            image: value
        }));
    };

    const handleCryUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('audio/')) {
                setError(t(language, "invalidAudio"));
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                setError(t(language, "audioTooLarge"));
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setNewPokemon(prev => ({
                    ...prev,
                    cry: base64String
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const updateCryUrl = (value) => {
        setNewPokemon(prev => ({
            ...prev,
            cry: value
        }));
    };

    const addType = (newType) => {
        if (newType && !newPokemon.type.includes(newType) && newPokemon.type.length < 2) {
            setNewPokemon(prev => ({
                ...prev,
                type: [...prev.type, newType]
            }));
        }
    };

    const removeType = (typeToRemove) => {
        if (newPokemon.type.length > 1) {
            setNewPokemon(prev => ({
                ...prev,
                type: prev.type.filter(tt => tt !== typeToRemove)
            }));
        }
    };

    const validatePokemon = () => {
        const errors = [];

        if (!newPokemon.name.english.trim()) errors.push(t(language, "requiredNameEnglish"));
        if (!newPokemon.name.japanese.trim()) errors.push(t(language, "requiredNameJapanese"));
        if (!newPokemon.name.chinese.trim()) errors.push(t(language, "requiredNameChinese"));
        if (!newPokemon.name.french.trim()) errors.push(t(language, "requiredNameFrench"));

        if (newPokemon.type.length === 0) errors.push(t(language, "requiredType"));

        Object.entries(newPokemon.base).forEach(([stat, value]) => {
            if (value < 1 || value > 255) {
                errors.push(t(language, "statRange", stat));
            }
        });

        return errors;
    };

    const createPokemon = async () => {
        setIsSaving(true);
        setError(null);

        try {
            const validationErrors = validatePokemon();
            if (validationErrors.length > 0) {
                throw new Error(validationErrors.join(', '));
            }

            const pokemonData = {
                name: newPokemon.name,
                type: newPokemon.type,
                base: {
                    HP: newPokemon.base.HP,
                    Attack: newPokemon.base.Attack,
                    Defense: newPokemon.base.Defense,
                    SpecialAttack: newPokemon.base.SpecialAttack,
                    SpecialDefense: newPokemon.base.SpecialDefense,
                    Speed: newPokemon.base.Speed
                },
                cry: newPokemon.cry || ''
            };

            if (newPokemon.image) {
                pokemonData.image = newPokemon.image;
            }

            const response = await fetch('http://localhost:3000/pokemons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify(pokemonData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                let errorMessage = errorData.error || t(language, "createErrorDefault");

                if (errorData.details) {
                    if (Array.isArray(errorData.details)) {
                        errorMessage += ': ' + errorData.details.join(', ');
                    } else {
                        errorMessage += ': ' + errorData.details;
                    }
                }
                throw new Error(errorMessage);
            }

            navigate('/pokemons');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSaving(false);
        }
    };

    const resetForm = () => {
        setNewPokemon({
            name: { english: '', japanese: '', chinese: '', french: '' },
            type: ['Normal'],
            base: { HP: 50, Attack: 50, Defense: 50, SpecialAttack: 50, SpecialDefense: 50, Speed: 50 },
            image: '',
            cry: ''
        });
        setError(null);
        setImagePreview('');
    };

    return {
        newPokemon,
        isSaving,
        error,
        imagePreview,
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
    };
};

export default usePokemonCreator;
