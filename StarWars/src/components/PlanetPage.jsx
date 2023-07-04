import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../globals'

const PlanetPage = () => {

    const [planet, setPlanet] = useState('')

    let { id } = useParams()

    useEffect(()=>{
        const getPlanet = async() => {
          const response = await axios.get(`${BASE_URL}/planets/`)
          setPlanet(response.data.results[id])
          console.log(response)
        }
        getPlanet()
      },[])

return planet ? (
    <div className="planetDetailsPage">
        <h2>Name: {planet.name}</h2>
        <h3>Population: {planet.population} inhabitants</h3>
        <h3>Climate: {planet.climate} </h3>
        <h3>Terrain: {planet.terrain} </h3>
        <h3>Gravity: {planet.gravity} </h3>
        <h3>Revolution: {planet.orbital_period} days </h3>
        <h3>Day length: {planet.rotation_period} hours</h3>
        <button><Link to='/planets'>planets</Link></button>
    </div>
) : <h3>Finding planet...</h3>

}

export default PlanetPage