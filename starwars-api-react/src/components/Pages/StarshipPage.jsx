import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { BASE_URL } from '../../globals'
import axios from "axios"

const ShipDetails = () => {

    
    const [starship, setStarship] = useState()
    
    let {id} = useParams()

    useEffect(()=>{
    const getStarship = async() => {
        const response = await axios.get(`${BASE_URL}starships/`)
        setStarship(response.data.results[id])
    }
    getStarship()
    },[])


    return starship ? (
    <div className="starship-detail">
        <h2>Name: {starship.name}</h2>
        <h2>Model: {starship.model}</h2>
        <h2>Class: {starship.starship_class}</h2>
        <h2>Cost: {starship.cost_in_credits}</h2>
        <h2>Length: {starship.length}</h2>
        <h2>Max Speed: {starship.max_atmosphering_speed}</h2>
        <h2>Crew: {starship.crew}</h2>
        <h2>Passengers: {starship.passengers}</h2>
        <h2>Cargo Capacity: {starship.cargo_capacity}</h2>

         
        <Link to="/starships"> Return to starship list</Link>
    </div>
    ) : <h3>Finding starships...</h3>
}

export default ShipDetails
