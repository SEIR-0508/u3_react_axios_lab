import { BASE_URL } from "../../globals"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function PlanetsList () {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanet = async () => {
            const responce = await axios.get(`${BASE_URL}/planets`)
            setPlanets(responce)
        }
        getPlanet()
    }, [])
    console.log(planets)

    if (!planets.data) {
        return (
            <h1>Waiting on data to load</h1>
        )
    } else {
        return (
            <div className="main">
            {planets.data.results.map((planet, index) => (
                <div key={index} className="card">
                    <h1>{planet.name}</h1>
                    <p>Population: {planet.population}</p>
                    <p>Gravity: {planet.gravity}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Orbital Period: {planet.orbital_period} days</p>
                    <p>Rotational Period: {planet.rotation_period}hrs</p>
                </div>
            ))}
        </div>
        )
    }
}