import './App.css'
import { useNavigate } from 'react-router'
import { Link } from "react-router";

import PokeList from '../components/pokelist'
function App() {
    const navigate = useNavigate();

    return (
        <div>
            <PokeList/>
        </div>
    )
}

export default App
