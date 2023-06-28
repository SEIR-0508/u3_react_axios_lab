import { SHIPS_URL} from '../globals.js'
import axios from 'axios'
import { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'


export default function StarshipList({ ships,setShips }){
    
    const navigate = useNavigate()
    const showShip = (ship) =>{
        navigate(ship.cost_in_credits)
    }
    useEffect(()=>{
        const getShipsAPI = async() => {
          const response = await axios.get(SHIPS_URL)
          setShips(response.data.results)
        }
        getShipsAPI()
      },[])
    return ships ? (
    <div>
        <Header />
        <div className='starships list'>
            <h2>Starships</h2>
            {ships.map(ship=>(
                <div key={ship.name} className='item' onClick={()=>(showShip(ship))}>
                    <h1>{ship.name}</h1>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Maximum Atmosphering Speed: {ship.max_atmosphering_speed}</p>
                </div>
            ))}
        </div>
    </div>
    ) : <h3>Loading...</h3>
}
