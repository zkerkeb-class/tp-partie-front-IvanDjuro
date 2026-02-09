import { useState, useEffect } from 'react';

const useLogin = () => {
    // Initialiser l'état avec les données du localStorage
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Sauvegarder dans localStorage à chaque changement d'utilisateur
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const login = async (username, password) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur d\'authentification');
            }

            // Stocke l'utilisateur dans l'état (et automatiquement dans localStorage via useEffect)
            setUser(data.user);
            return data.user; 

        } catch (err) {
            setError(err.message);
            return null; // Important : retourner null en cas d'erreur
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        // localStorage.removeItem('user') est géré automatiquement par useEffect
    };

    return { login, logout, user, error, loading };
};

export default useLogin;