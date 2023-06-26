import { BASE_URL } from "../../globals"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function StarshipList () {
    const [starships, setStarships] = useState([])

    useEffect(() => {
        const getStarships = async () => {
            const responce = await axios.get(`${BASE_URL}/starships`)
            setStarships(responce)
        }
        getStarships()
    }, [])
    console.log(starships)

    if (!starships.data) {
        return (
            <h1>Waiting on data</h1>
        )
    } else {
        return (
            <div className="main">
                {starships.data.results.map((ships, index) => (
                <div key={index} className="card">
                    <h1>{ships.name}</h1>
                    <p>Class: {ships.starship_class}</p>
                    <p>Manufacturer: {ships.manufacturer}</p>
                    <p>Cost: {ships.cost_in_credits} credits</p>
                    <p>Length: {ships.length}m</p>
                    <p>Cargo Capacity: {ships.cargo_capacity} kg</p>
                    <p>Crew Size: {ships.crew}</p>
                    <p>Passengers: {ships.passengers}</p>
                    <p>Hyperdrive Rating: {ships.hyperdrive_rating}</p>
                    <p>Max Atmoshpering Speed: {ships.max_atmosphering_speed} kph</p>
                </div>
            ))}
            </div>
        )
    }

}