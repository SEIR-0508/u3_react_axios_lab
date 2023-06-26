import { Routes, Route } from 'react-router-dom'
import StarshipList from './StarshipList'
import FilmList from './FilmList'
import PlanetsList from './PlanetsList'
import CharactersList from './CharactersList'
import SpeciesList from './SpeciesList'
import Home from './Home'


export default function Main({ ships,setShips,films,setFilms,planets,setPlanets,characters,setCharacters,species,setSpecies }){
    
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/starship' element={<StarshipList ships={ships} setShips={setShips}/>}/>
            <Route path='/film' element={<FilmList films={films} setFilms={setFilms}/>}/>
            <Route path='/planet' element={<PlanetsList planets={planets} setPlanets={setPlanets}/>}/>
            <Route path='/character' element={<CharactersList characters={characters} setCharacters={setCharacters}/>}/>
            <Route path='/species' element={<SpeciesList species={species} setSpecies={setSpecies}/>}/>
        </Routes>
    )
}