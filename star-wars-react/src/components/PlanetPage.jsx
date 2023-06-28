import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const PlanetPage = () => {
    const [planet, setPlanet] = useState('')
    let { id } = useParams()

    useEffect(()=> {
        const getPlanet = async (url) => {
            let results = []
            while (url) {
                const response = await axios.get(url)
                const data = response.data
                results = results.concat(data.results)
                url = data.next
            }
            setPlanet(results[id])
        }
        getPlanet('https://swapi.dev/api/planets/')
    }, [planet, id])

    console.log(planet)

    let BASE_URL = String("https://swapi.dev/api/planets/")
    let planetUrl = String(planet.url)
    let start = planetUrl.indexOf(BASE_URL)
    let end = start + BASE_URL.length

    let planetSlash = planetUrl.substring(0, start - 1) + planetUrl.substring(end)
    let planetNumber = planetSlash.replace('/', '')
    console.log(planetNumber)

    let planetImage = ""
    if (planetNumber !== "1") {
     planetImage = `https://starwars-visualguide.com/assets/img/planets/${planetNumber}.jpg`
    } else {
        planetImage = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg"
    }

    if (planet.length === 0) {
        return <h2>Loading...</h2>
    } else {
    return (
        <div className="individualCard">
            <h2 className="individualTitle">{planet.name} </h2>
            <div class="individualDisplay">
            <div className="titleInfo">
            <img src={planetImage}/>
            </div>
            <div className="additionalInfo">
            <p><strong>Rotation Period:</strong> {planet.rotation_period}</p>
            <p><strong>Orbital Period:</strong> {planet.orbital_period}</p>
            <p><strong>Diameter:</strong> {planet.diameter}</p>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Gravity:</strong> {planet.gravity}</p>
            <p><strong>Terrain:</strong> {planet.terrain}</p>
            <p><strong>Surface Water:</strong> {planet.surface_water}</p>
            <p><strong>Population:</strong> {planet.population}</p>
            <Link class="goBack" to="/characters">Return to character list</Link>
            </div>
            </div>
        </div>
    )
    }
}

export default PlanetPage