import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlanetsList = () => {
    const [planets, setPlanets] = useState([])

    useEffect(()=> {
        const getPlanets = async () => {
            const response = await axios.get(`https://swapi.dev/api/planets/`)
            console.log(response.data.results)
            setPlanets(response.data.results)
        }
        getPlanets()
    }, [planets])

    let navigate = useNavigate()

    const showPlanet = (id) => {
        navigate(`${id}/`)
    }

    return (
        <div className="planet">
            <h2>Planets</h2>
            {
                planets.map((planet, id) => (
                    <div key={id} onClick={()=>showPlanet(id)} className="card">
                        <h3>{planet.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default PlanetsList