import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Characters from "./Characters";
import Films from './Films'
import Planets from './Planets'
import Species from './Species'
import StarshipList from './StarshipList'
import Vehicles from './Vehicles'
import StarshipDetails from "./StarshipDetails";
import FilmDetails from "./FilmDetails";
import PlanetDetails from "./PlanetDetails";
import CharacterDetails from './CharacterDetails'
import VehicleDetails from './VehicleDetails'
import SpeciesDetails from "./SpeciesDetails";
import { useState, useEffect } from 'react'
import axios from 'axios'


const Main = () => {
      
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [species, setSpecies] = useState([])

  useEffect(() => {

//    Starships
    const getStarships = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships`)
      setStarships(response.data.results)
    }
    getStarships()

//     Films
    const getFilms = async () => {
      const response = await axios.get(`https://swapi.dev/api/films`)
      setFilms(response.data.results)
    }
    getFilms()

//     Planets
    const getPlanets = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets`)
      setPlanets(response.data.results)
    }
    getPlanets()

//     Characters
    const getCharacters = async () => {
      const response = await axios.get(`https://swapi.dev/api/people`)
      setCharacters(response.data.results)
    }
    getCharacters()

//     Vehicles
    const getVehicles = async () => {
      const response = await axios.get(`https://swapi.dev/api/vehicles`)
      setVehicles(response.data.results)
    }
    getVehicles()

//     Species
    const getSpecies = async () => {
      const response = await axios.get(`https://swapi.dev/api/species`)
      setSpecies(response.data.results)
    }
    getSpecies()
  }, [])

      return (
        <Routes>
          <Route      
                path='/' 
                element={<Home />}
          />
          <Route 
                path='/starship' 
                element={<StarshipList
                starships={starships}
                />}
          />
          <Route 
            path='/starship/:id' 
            element={<StarshipDetails
              starships={starships} />}
          />

          <Route      
                path='/films' 
                element={<Films 
                films={films}
                />}
          />
          <Route      
                path='/films/:id' 
                element={<FilmDetails 
                films={films}
                />}
          />

          <Route      
                path='/planets' 
                element={<Planets 
                planets={planets}
                />}
          />
          <Route      
                path='/planets/:id' 
                element={<PlanetDetails 
                planets={planets}
                />}
          />

          <Route      
                path='/characters' 
                element={<Characters 
                characters={characters}
                />}
          />
          <Route      
                path='/characters/:id' 
                element={<CharacterDetails 
                characters={characters}
                />}
          />

          <Route      
                path='/vehicles' 
                element={<Vehicles 
                vehicles={vehicles}
                />}
          />
          <Route      
                path='/vehicles/:id' 
                element={<VehicleDetails 
                vehicles={vehicles}
                />}
          />

          <Route      
                path='/species' 
                element={<Species 
                species={species}
                />}
          />
          <Route      
                path='/species/:id' 
                element={<SpeciesDetails 
                species={species}
                />}
          />

        </Routes>
        
      )
    }
    
export default Main