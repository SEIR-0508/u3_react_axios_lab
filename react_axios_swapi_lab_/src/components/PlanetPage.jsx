import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PlanetPage = () => {

    const [planet, setPlanet] = useState()
    //setting up the param to pull to be the ship's ID

    let {id} = useParams()

    useEffect(()=>{
        const getPlanet = async() => {
            const response = await axios.get(`https://swapi.dev/api/planets/`)
            setPlanet(response.data.results[id])
        }
        getPlanet()
    },[])

    if (!planet) {return <h3>Loading Planet</h3>}
    return (
        <div className="detail-div">
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Population: {planet.population}</p>
            <Link to="/planets" className="back-btn">Back</Link>
        </div>
    ) 
}

export default PlanetPage
