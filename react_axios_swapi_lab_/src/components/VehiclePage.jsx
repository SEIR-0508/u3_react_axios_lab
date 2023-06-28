import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const VehiclePage = () => {

    const [vehicle, setVehicle] = useState()
    //setting up the param to pull to be the ship's ID

    let {id} = useParams()

    useEffect(()=>{
        const getVehicle = async() => {
            const response = await axios.get(`https://swapi.dev/api/vehicles/`)
            setVehicle(response.data.results[id])
        }
        getVehicle()
    },[])

    if (!vehicle) {return <h3>Loading Vehicle</h3>}
    return (
        <div className="detail-div">
            <h2>{vehicle.name}</h2>
            <p>Model: {vehicle.model}</p>
            <p>Price: {vehicle.cost_in_credits} credits</p>
            <p>Vehicle Type: {vehicle.vehicle_class}</p>
            <Link to="/vehicle">Back</Link>
        </div>
    ) 
}

export default VehiclePage
