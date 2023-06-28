import { useEffect, useState } from 'react'
import { useParams, Link} from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../../globals"

export default function VehicleDetails () {
    const [vehicle, setVehicles] = useState('')
    let { id } = useParams()

    useEffect(() => {
        const getVehicle = async () => {
            const responce = await axios.get(`${BASE_URL}vehicles`)
            setVehicles(responce.data.results[id])
        }
        getVehicle()
    }, [])

    console.log(vehicle)

    if (!vehicle.name) {
        return (
            <h1>Waiting on data</h1>
        )
    } else {
        return (
            <div>
                <h1>{vehicle.name}</h1>
                <p>Model: {vehicle.model}</p>
                <p>Class: {vehicle.vehicle_class}</p>
                <p>Manufacturer: {vehicle.manufacturer}</p>
                <p>Cost: {vehicle.cost_in_credits} credits</p>
                <p>Length: {vehicle.length}m</p>
                <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
                <p>Consumables: {vehicle.consumables}</p>
                <p>Crew Size: {vehicle.crew}</p>
                <p>Passengers: {vehicle.passengers}</p>
                <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
                <p>Pilots:</p>
                <p>Films:</p>
                <Link to="/vehicles">Back</Link>
            </div>
        )
    }
}