import { BASE_URL } from "../../globals"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import Vehicle from "../data/Vehicle.json"

export default function VehiclesList () {
    const [vehicles, setVehicles] = useState([])
    const [vehicleImg, setVehicleImg] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
            const responce = await axios.get(`${BASE_URL}/vehicles`)
            setVehicleImg(Vehicle)
            setVehicles(responce)
        }
        getVehicles()
    }, [])

    let navigate = useNavigate()

    const showVehicles = (index) => {
        navigate(`${index}`)
    }

    if (!vehicles.data) {
        return (
            <h1>Waiting on Data</h1>
        )
    } else {
        return (
            <div className="main">
                {vehicles.data.results.map((ships, index) => (
                <div key={index} className="card" onClick={() => {showVehicles(index)}}>
                    <h1>{ships.name}</h1>
                    <img src={vehicleImg[index].image} className="img" />
                </div>
            ))}
            </div>
        )
    }
}