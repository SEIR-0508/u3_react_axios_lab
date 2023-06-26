import { PLANETS_URL} from '../globals.js'
import axios from 'axios'
import { useEffect } from 'react'
import Header from './Header'

export default function PlanetsList({ planets,setPlanets }){
    useEffect(()=>{
        const getPlanetsAPI = async() =>{
          const response = await axios.get(PLANETS_URL)
          setPlanets(response.data.results)
        }
        getPlanetsAPI()
      },[])
    return(
        <div>
        <Header />
        <div className='planets'>
            <h2>Planets</h2>
            <ul>
                {planets.map(planet=>(
                    <li key={planet.name}>{planet.name}</li>
                ))}
            </ul>
        </div>
        </div>
    )
}