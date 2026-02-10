import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useLogin from '../hooks/useLogin';
import "./loginScreen.css";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const { login, error, loading } = useLogin();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(username, password);
        if (success) {
            navigate('/pokemons');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Poké-Connexion</h1>
                <p>Entre tes identifiants pour accéder au Pokédex</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="ex: admin"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button 
                        className="login-button"
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? 'Connexion en cours...' : 'Se connecter'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;