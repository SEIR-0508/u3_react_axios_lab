import { useState, useEffect } from 'react'
import axios from 'axios'

const PlanetsList = () => {
    const [planets, setPlanets] = useState([])

    useEffect(()=> {
        const getPlanets = async () => {
            const response = await axios.get('https://swapi.dev/api/planets')
            //console.log(response.data.results)
            setPlanets(response.data.results)
        }
        getPlanets()
    }, [])

    //console.log(starships)

    return (
        <div className="grid">
            {
                planets.map((planet)=> (
                    <div
                    className="card">
                        <h3> Name: {planet.name} </h3>
                        <p> Rotation Period: {planet.rotation_period} </p>
                        <p> Oribital Period: {planet.orbital_period} </p>
                        <p> Diameter: {planet.diameter} </p>
                        <p> Climate: {planet.climate} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default PlanetsList