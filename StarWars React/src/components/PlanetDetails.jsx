import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from '../../globals'

export default function PlanetDetails () {
    const [planet, setPlanet] = useState('')
    let { id } = useParams()

    useEffect(() => {
        const getPlanet = async () => {
            const responce = await axios.get(`${BASE_URL}planets/${id}`)
            setPlanet(responce)
        }
        getPlanet()
    }, [])

    console.log(planet)

    if (!planet.data) {
        return (
            <h1>Waiting on data</h1>
        )
    } else {
        return (
            <div>
                <h1>{planet.data.name}</h1>
                <p>Rotation period: {planet.data.rotation_period} hrs</p>
                <p>Orbit period: {planet.data.orbital_period} days</p>
                <p>Diameter: {planet.data.diameter}km</p>
                <p>Gravity: {planet.data.gravity}</p>
                <p>Terrain: {planet.data.terrain}</p>
                <p>Population: {planet.data.population}</p>
                <p>Films:</p>
                <Link to="/planets">Back</Link>
            </div>
        )
    }
}