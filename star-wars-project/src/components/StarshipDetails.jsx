import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import Header from './Header'

export default function StarshipDetails({ ships }){
    const [ship, setShip] = useState('')
    let { cost_in_credits } = useParams()
    useEffect(()=>{
        let selectedShip = ships.find(ship=>(ship.cost_in_credits === cost_in_credits))
        setShip(selectedShip)
    },[ship.name, cost_in_credits])
    console.log(ship)
    return ship ? (
        <div>
        <Header />
        <button><Link to='/starship'>Back to Starships</Link></button>
        <div className='details'>
            <h1>{ship.name}</h1>
            <p>Model: {ship.model}</p>
            <p>Manufacturer: {ship.manufacturer}</p>
            <p>Crew Size: {ship.crew} people</p>
            <p>Cargo Capacity: {ship.cargo_capacity} people</p>
            <p>Maximum Atmosphering Speed: {ship.max_atmosphering_speed}</p>
        </div>
        </div>
    ) : <h3>Loading...</h3>
}