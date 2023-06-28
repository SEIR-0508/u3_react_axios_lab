import { Routes, Route } from 'react-router-dom'
import StarshipList from './StarshipList'
import FilmList from './FilmList'
import PlanetsList from './PlanetsList'
import CharactersList from './CharactersList'
import SpeciesList from './SpeciesList'
import StarshipDetails from './StarshipDetails'
import FilmDetails from './FilmDetails'
import PlanetDetails from './PlanetDetails'
import CharacterDetails from './CharacterDetails'
import SpeciesDetails from './SpeciesDetails'
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
            <Route path='/starship/:cost_in_credits' element={<StarshipDetails ships={ships}/>}/>
            <Route path='/film/:episode_id' element={<FilmDetails films={films}/>}/>
            <Route path='/planet/:diameter' element={<PlanetDetails planets={planets}/>}/>
            <Route path='/character/:height' element={<CharacterDetails characters={characters} />}/>
            <Route path='/species/:classification' element={<SpeciesDetails species={species} />}/>
        </Routes>
    )
}