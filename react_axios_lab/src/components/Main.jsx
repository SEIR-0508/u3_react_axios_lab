import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Home from './Home'
import StarshipList from './StarshipList'
import FilmList from './FilmList'
import PlanetList from './PlanetList'
import CharacterList from './CharacterList'
import StarshipPage from './StarshipPage'
import FilmPage from './FilmPage'
import PlanetPage from './PlanetPage'
import CharacterPage from './CharacterPage'

import { useState, useEffect } from 'react'

const Main = () => {

  const [starships, setStarships] = useState([])
  const [selectedStarship, setSelectedStarship] = useState(null)


useEffect(()=>{
    const getStarships = async () => {
    const response = await axios.get(`${BASE_URL}starships`)
    setStarships(response.data.results)
      }
      getStarships()
      }, [])

console.log(starships)




const [films, setFilms] = useState([])
  const [selectedFilm, setSelectedFilm] = useState(null)


useEffect(()=>{
    const getFilms = async () => {
    const response = await axios.get(`${BASE_URL}films`)
    setFilms(response.data.results)
      }
      getFilms()
      }, [])

console.log(films)




const [planets, setPlanets] = useState([])
  const [selectedPlanet, setSelectedPlanet] = useState(null)


useEffect(()=>{
    const getPlanets = async () => {
    const response = await axios.get(`${BASE_URL}planets`)
    setPlanets(response.data.results)
      }
      getPlanets()
      }, [])

console.log(planets)




const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)


useEffect(()=>{
    const getCharacters = async () => {
    const response = await axios.get(`${BASE_URL}people`)
    setCharacters(response.data.results)
      }
      getCharacters()
      }, [])

console.log(characters)






  

    return (
    <div className="main">
        <Routes>
        <Route exact path="/" element={<Home/>}/>

        <Route exact path="/starships" element={<StarshipList starships={starships}/>}/>
        <Route exact path='/starships/:name' element={<StarshipPage starships={starships}/>}/>

        <Route exact path="/films" element={<FilmList films={films}/>}/>
        <Route exact path="/films/:title" element ={<FilmPage films={films}/>}/>

        <Route exact path="/planets" element={<PlanetList planets={planets}/>}/>
        <Route exact path="/planets/:name" element={<PlanetPage planets={planets}/>}/>

        <Route exact path="/characters" element={<CharacterList characters={characters}/>}/>
        <Route exact path="/characters/:name" element={<CharacterPage characters={characters}/>}/>
       
        
      </Routes>
  
    </div>
)}

export default Main