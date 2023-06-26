import { BASE_URL } from "../../globals"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function VehiclesList () {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
            const responce = await axios.get(`${BASE_URL}/vehicles`)
            setVehicles(responce)
        }
        getVehicles()
    }, [])

    console.log(vehicles)

    if (!vehicles.data) {
        return (
            <h1>Waiting on Data</h1>
        )
    } else {
        return (
            <div className="main">
                {vehicles.data.results.map((ships, index) => (
                <div key={index} className="card">
                    <h1>{ships.name}</h1>
                    <p>Model: {ships.model}</p>
                    <p>Manufacturer: {ships.manufacturer}</p>
                    <p>Cost: {ships.cost_in_credits} credits</p>
                    <p>Length: {ships.length}m</p>
                    <p>Cargo Capacity: {ships.cargo_capacity} kg</p>
                    <p>Crew Size: {ships.crew}</p>
                    <p>Passengers: {ships.passengers}</p>
                    <p>Max Atmoshpering Speed: {ships.max_atmosphering_speed} kph</p>
                </div>
            ))}
            </div>
        )
    }
}