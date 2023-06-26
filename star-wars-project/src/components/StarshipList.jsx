import { SHIPS_URL} from '../globals.js'
import axios from 'axios'
import { useEffect } from 'react'
import Header from './Header'

export default function StarshipList({ ships,setShips }){
    
    useEffect(()=>{
        const getShipsAPI = async() => {
          const response = await axios.get(SHIPS_URL)
          setShips(response.data.results)
        }
        getShipsAPI()
      },[])
    return(
    <div>
        <Header />
        <div className='starships'>
            <h2>Starships</h2>
            <ul>
            {ships.map(ship=>(
                <li key={ship.name}>{ship.name}</li>
            ))}
            </ul>
        </div>
    </div>
    )
}
