import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { BASE_URL } from '../../globals'
import axios from "axios"

const PlanetDetails = () => {

    
    const [planet, setPlanet] = useState()
    
    let {id} = useParams()

    useEffect(()=>{
    const getPlanet = async() => {
        const response = await axios.get(`${BASE_URL}planets/`)
        setPlanet(response.data.results[id])
    }
    getPlanet()
    },[])


    return planet ? (
    <div className="planet-detail">
        <h2>Name: {planet.name}</h2>
        <h2>Climate: {planet.climate}</h2>
        <h2>Gravity: {planet.gravity}</h2>
        <h2>Terrain: {planet.terrain}</h2>
        <h2>Population: {planet.population}</h2>

        <Link to="/planets"> Return to planet list</Link>
    </div>
    ) : <h3>Finding planets...</h3>
}

export default PlanetDetails