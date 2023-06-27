import { Route, Routes} from 'react-router-dom'
import Home from './home'
import Starships from './starshiplist'
import StarshipDetails from './starshipdetails'
import Planets from './planets'
import Characters from './characters'
import Films from './films'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Main () {

const [starships, setStarships] = useState([])
  const [selectedStarship, setSelectedStarship] = useState(null)
  
  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get('https://swapi.dev/api/starships')
    console.log(response.data.results)
  setStarships(response.data.results)
  }

  getStarships()
  }, [])
 
  const [peoples, setPeople] = useState([])
    const [selectedPerson, setSelectedPerson] = useState(null)

    useEffect(() => {
        const getPeople = async () => {
            const response = await axios.get('https://swapi.dev/api/people')
            setPeople(response.data.results)
        }
    getPeople()
    }, [])

  const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilms] = useState(null)

    useEffect(() => {
        const getFilms = async () => {
            const response = await axios.get('https://swapi.dev/api/films')
            setFilms(response.data.results)
        }
    getFilms()
    }, [])

  const [planets, setPlanets] = useState([])
    const [selectedPlanet, setSelectedPlanets] = useState(null)

    useEffect(() => {
        const getPlanets = async () => {
            const response = await axios.get('https://swapi.dev/api/planets')
            setPlanets(response.data.results)
        }
    getPlanets()
    }, [])

    return(
        <div className='routesCont'>
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/starships' element={<Starships starships={starships}/>} />
               <Route path='/starships/:name' element={<StarshipDetails starships={starships}/>} />
               <Route path='/planets' element={<Planets planets={planets}/>} />
               <Route path='/characters' element={<Characters peoples={peoples}/>} />
               <Route path='/films' element={<Films films={films}/>} />
            </Routes>
        </div>
    )
}