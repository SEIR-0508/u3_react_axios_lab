import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import FilmList from "./FilmList"
import PlanetList from "./PlanetList"
import CharacterList from "./CharacterList";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' Component={Home} /> 
                <Route path='/starships' Component={StarshipList} /> 
                <Route path='/films' Component={FilmList} /> 
                <Route path='/planets' Component={PlanetList} /> 
                <Route path='/characters' Component={CharacterList} /> 
            </Routes>
        </main>
    )
}

export default Main