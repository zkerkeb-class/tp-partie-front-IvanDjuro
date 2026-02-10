import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import PokemonDetails from './screens/pokemonDetails.jsx';
import CreatePokemon from './screens/createPokemon.jsx';
import LoginScreen from './screens/loginScreen.jsx';

import ProtectedRoute from './protectedRoute.jsx';


import './index.css'
import App from './screens/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path="/pokemons" element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>}/>
        <Route path="/pokemons/:lang/:id" element={
          <ProtectedRoute>
            <PokemonDetails />
          </ProtectedRoute>} />
        <Route path="/pokemons/:lang/create" element={<CreatePokemon />} />

        <Route path="/pokemons/create" element={
          <ProtectedRoute>
            <Navigate to="/pokemons/french/create" replace />
          </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
