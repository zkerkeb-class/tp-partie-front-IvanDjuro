import { useState } from "react";

const usePokemonCreator = (navigate) => {
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
        cry: '' // URL du fichier audio du cri
    });

    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    // Mettre à jour un nom dans une langue spécifique
    const updateName = (lang, value) => {
        setNewPokemon(prev => ({
            ...prev,
            name: {
                ...prev.name,
                [lang]: value
            }
        }));
    };

    // Mettre à jour une statistique
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
                setNewPokemon(prev => ({
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
        setNewPokemon(prev => ({
            ...prev,
            image: value
        }));
    };

    // Upload du cri audio et conversion en base64
    const handleCryUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('audio/')) {
                setError('Veuillez sélectionner un fichier audio valide');
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                setError('Le fichier audio ne doit pas dépasser 5MB');
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

    // Mettre à jour l'URL du cri
    const updateCryUrl = (value) => {
        setNewPokemon(prev => ({
            ...prev,
            cry: value
        }));
    };

    // Ajouter un type
    const addType = (newType) => {
        if (newType && !newPokemon.type.includes(newType) && newPokemon.type.length < 2) {
            setNewPokemon(prev => ({
                ...prev,
                type: [...prev.type, newType]
            }));
        }
    };

    // Supprimer un type
    const removeType = (typeToRemove) => {
        if (newPokemon.type.length > 1) {
            setNewPokemon(prev => ({
                ...prev,
                type: prev.type.filter(t => t !== typeToRemove)
            }));
        }
    };

    // Valider les données
    const validatePokemon = () => {
        const errors = [];

        // Vérifier que tous les noms sont remplis
        if (!newPokemon.name.english.trim()) errors.push('Le nom en anglais est obligatoire');
        if (!newPokemon.name.japanese.trim()) errors.push('Le nom en japonais est obligatoire');
        if (!newPokemon.name.chinese.trim()) errors.push('Le nom en chinois est obligatoire');
        if (!newPokemon.name.french.trim()) errors.push('Le nom en français est obligatoire');

        // Vérifier qu'il y a au moins un type
        if (newPokemon.type.length === 0) errors.push('Au moins un type est obligatoire');

        // Le cri est optionnel (valeur par défaut si vide)

        // Vérifier que toutes les stats sont valides
        Object.entries(newPokemon.base).forEach(([stat, value]) => {
            if (value < 1 || value > 255) {
                errors.push(`${stat} doit être entre 1 et 255`);
            }
        });

        return errors;
    };

    // Créer le Pokémon
    const createPokemon = async () => {
        setIsSaving(true);
        setError(null);

        try {
            // Validation
            const validationErrors = validatePokemon();
            if (validationErrors.length > 0) {
                throw new Error(validationErrors.join(', '));
            }

            // Préparer les données pour l'API
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
                // Toujours inclure le cry (vide ou rempli)
                cry: newPokemon.cry || ''
            };

            // Ajouter l'image si elle existe
            if (newPokemon.image) {
                pokemonData.image = newPokemon.image;
            }

            console.log('pokemonData.cry:', pokemonData.cry);
            console.log('pokemonData à envoyer:', {
                ...pokemonData,
                cry: pokemonData.cry ? `[base64 string of length ${pokemonData.cry.length}]` : 'empty',
                image: pokemonData.image ? `[base64 string of length ${pokemonData.image.length}]` : 'empty'
            });

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
                console.error('Erreur API:', errorData);
                
                // details peut être un tableau ou une chaîne
                let errorMessage = errorData.error || 'Erreur lors de la création';
                if (errorData.details) {
                    if (Array.isArray(errorData.details)) {
                        errorMessage = errorData.details.join(', ');
                    } else {
                        errorMessage = errorData.details;
                    }
                }
                
                throw new Error(errorMessage);
            }

            const data = await response.json();
            console.log('Réponse API:', data);
            
            // L'API retourne { message: "...", pokemon: {...} }
            // Vérifier que pokemon existe dans la réponse
            const createdPokemon = data.pokemon || data;
            
            // Rediriger vers la page de détails du nouveau Pokémon
            if (createdPokemon && createdPokemon.id) {
                navigate(`/pokemons/english/${createdPokemon.id}`);
            } else {
                throw new Error('Pokémon créé mais impossible de récupérer son ID');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSaving(false);
        }
    };

    // Réinitialiser le formulaire
    const resetForm = () => {
        setNewPokemon({
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
        setImagePreview('');
        setError(null);
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