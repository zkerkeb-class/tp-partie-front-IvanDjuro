import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from "react-router";
import PokemonDetails from './screens/pokemonDetails.jsx';
import CreatePokemon from './screens/createPokemon.jsx';

import './index.css'
import App from './screens/App.jsx'

createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                    <App />
                } />
            <Route path="/pokemons/:lang/:id" element={<PokemonDetails />} />
            <Route path="/pokemons/create" element={<CreatePokemon />} />
        </Routes>
    </BrowserRouter>
 ,
)
