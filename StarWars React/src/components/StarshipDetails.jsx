import { useEffect, useState } from 'react'
import { useParams, Link} from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../../globals'

export default function StarshipDetails () {
    const [starship, setStarship] = useState('')
    let { id } = useParams()

    useEffect(() => {
        const getStarship = async () => {
            const responce = await axios.get(`${BASE_URL}starships`)
            setStarship(responce.data.results[id])
        }
        getStarship()
    }, [])

    if (!starship.name) {
        return (
            <h1>Waiting on data</h1>
        )
    } else {
        return (
            <div>
                <h1>{starship.name}</h1>
                <p>Model: {starship.model}</p>
                <p>Class: {starship.starship_class}</p>
                <p>Manufaturer: {starship.manufacturer}</p>
                <p>Cost: {starship.cost_in_credits} credits</p>
                <p>Length: {starship.length}m</p>
                <p>Cargo Capacity: {starship.cargo_capacity}kg</p>
                <p>Consumables: {starship.consumables}</p>
                <p>Crew Size: {starship.crew}</p>
                <p>Passengers: {starship.passengers}</p>
                <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
                <p>Max Atmosphering Speed: {starship.max_atmosphering_speed} kph</p>
                <p>Pilots:</p>
                <p>Films:</p>
                <Link to="/starships">Back</Link>
            </div>
        )
    }
}