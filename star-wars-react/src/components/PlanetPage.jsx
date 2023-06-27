import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const PlanetPage = () => {
    const [planet, setPlanet] = useState('')
    let { id } = useParams()

    useEffect(()=>{
        const getPlanet = async () => {
            const response = await axios.get(`https://swapi.dev/api/planets/`)
            //console.log(response.data)
            setPlanet(response.data.results[id])
        }
        getPlanet()
    }, [planet, id])

    console.log(planet)

    let BASE_URL = String("https://swapi.dev/api/planets/")
    let planetUrl = String(planet.url)
    let start = planetUrl.indexOf(BASE_URL)
    let end = start + BASE_URL.length

    let planetSlash = planetUrl.substring(0, start - 1) + planetUrl.substring(end)
    let planetNumber = planetSlash.replace('/', '')
    console.log(planetNumber)

    let planetImage = `https://starwars-visualguide.com/assets/img/planets/${planetNumber}.jpg`


    return planet ? (
        <div className="card">
            <h2>Name: {planet.name} </h2>
            <img src={planetImage}/>
            <Link to="/planets">Return to planet list</Link>
        </div>
    ) : null;
}

export default PlanetPage