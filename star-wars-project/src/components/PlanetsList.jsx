import { PLANETS_URL} from '../globals.js'
import axios from 'axios'
import { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function PlanetsList({ planets,setPlanets }){
    let navigate = useNavigate()
    const showPlanet = (planet) => {
        navigate(planet.diameter)
    }
    useEffect(()=>{
        const getPlanetsAPI = async() =>{
          const response = await axios.get(PLANETS_URL)
          setPlanets(response.data.results)
        }
        getPlanetsAPI()
      },[])
    return planets ? (
        <div>
        <Header />
        <div className='planets list'>
            <h2>Planets</h2>
                {planets.map(planet=>(
                    <div key={planet.name} className='item' onClick={()=>showPlanet(planet)}>
                        <h1>{planet.name}</h1>
                        <span>Terrain: {planet.terrain}</span>
                    </div>
                ))}
        </div>
        </div>
    ) : <h3>Loading...</h3>
}