import './App.css'
import Main from './components/Main'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
    let starShips = []
    const [ships, setShips] = useState(starShips)
    let initialFilmState = []
    const [films, setFilms] = useState(initialFilmState)
    let initialPlanetState = []
    const [planets, setPlanets] = useState(initialPlanetState)
    let initialCharactersState = []
    const [characters, setCharacters] = useState(initialCharactersState)
    let initialSpeciesState = []
    const [species, setSpecies] = useState(initialSpeciesState)
  return (
    <div>
   <Main ships={ships} setShips={setShips} films={films} setFilms={setFilms} planets={planets} setPlanets={setPlanets} characters={characters} setCharacters={setCharacters} species={species} setSpecies={setSpecies}/>
   </div>
  )
}

export default App
