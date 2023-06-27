
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import StarshipList from './components/StarshipList'
import { useEffect, useState} from 'react'
import axios from 'axios'
import Films from './components/Films'
import Planets from './components/Planets'
import Characters from './components/Characters'
import ShipDetails from './components/StarshipPage'
import FilmDetails from './components/FilmsPage'
import PlanetDetails from './components/PlanetDetails'
import CharactersDetails from './components/CharactersDetails'




function App() {
 

  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])


  useEffect(() => {
     const getStarships = async () => {
       const response = await axios.get(`https://swapi.dev/api/starships/`)

       console.log(response)
       setStarships(response.data.results)
     }

     getStarships()

  }, [])


  let navigate = useNavigate()

   const showShip = (ship) => {
     navigate(`/starships/${ship.name}`, {state: {ship: ship}})
  }

    
    

  useEffect(() => {
     const getFilms = async () => {
      const response = await axios.get(`https://swapi.dev/api/films/`)

      console.log(response)
      setFilms(response.data.results)
    }
   
    getFilms()


  }, [])

  let fnavigate = useNavigate()

  const showFilm = (film) => {
    navigate(`/films/${film.title}`, {state: {film: film}})
 }








  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets/`)

      console.log(response)
      setPlanets(response.data.results)
    }
   
    getPlanets()


   
  }, []) 

     let pnavigate = useNavigate()

    const showPlanet = (planet) => {
    navigate(`/planets/${planet.name}`, {state: {planet: planet}})
 }




  useEffect(() => {

    const getCharacters = async () => {
      const response = await axios.get(`https://swapi.dev/api/people/`)

      console.log(response)
      setCharacters(response.data.results)
    }
   
    getCharacters()

   

  }, [])

  let cnavigate = useNavigate()

    const showCharacter = (character) => {
    navigate(`/characters/${character.name}`, {state: {character: character}})
 }

 
  

  return (
    <div className='App'>
       <Header/>

       <Routes>
         <Route  exact path='/' element={<Home/>}/>
         <Route exact path='/starship' element={<StarshipList  showShip={showShip}  starships={starships}/>}/>
         <Route exact path='/films' element={<Films   films={films}  showFilm={showFilm} />}/>
         <Route exact path='/planets' element={<Planets planets={planets} showPlanet={showPlanet} />}/>
         <Route exact path='/characters' element={<Characters characters={characters} showCharacter={showCharacter} />}/>
         <Route exact path='/starships/:name' element={<ShipDetails  />}/>
         <Route exact path='/films/:title' element={<FilmDetails />}/>
         <Route exact path='/planets/:name' element={<PlanetDetails />}/>
         <Route exact path='/characters/:name' element={<CharactersDetails />}/>
       </Routes>
    </div>  
  )
}

export default App
