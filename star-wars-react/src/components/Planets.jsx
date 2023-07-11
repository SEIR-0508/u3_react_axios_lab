import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlanetsList = () => {
    const [planets, setPlanets] = useState([])

    useEffect(()=> {
        const getPlanets = async (url) => {
            let results = []
            while (url) {
                const response = await axios.get(url)
                const data = response.data
                results = results.concat(data.results)
                url = data.next
            }
            setPlanets(results)
        }
        getPlanets('https://swapi.dev/api/planets/')
    }, [planets])

    let navigate = useNavigate()

    const showPlanet = (id) => {
        navigate(`${id}/`)
    }

    const planetImages = []

    for (let i=0; i<planets.length; i++) {
        let BASE_URL = String("https://swapi.dev/api/planets/")
        let planetUrl = String(planets[i].url)
        let start = planetUrl.indexOf(BASE_URL)
        let end = start + BASE_URL.length

        let planetSlash = planetUrl.substring(0, start - 1) + planetUrl.substring(end)
        let planetNumber = planetSlash.replace('/', '')
        console.log(planetNumber)
        if (planetNumber !== "1") {
            planetImages.push(`https://starwars-visualguide.com/assets/img/planets/${planetNumber}.jpg`)
        } else if (planetNumber === "21") {
            planetImages.push("https://mystwarscollection.weebly.com/uploads/8/9/9/4/8994856/399029_orig.jpg")
        } else {
            planetImages.push("https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg")
        }
    }

    if (planets.length === 0) {
        return <h2>Loading...</h2>
    } else {
    return (
        <div className="planets">
            <h2>Planets</h2>
            <div class="planet">
            {
                planets.map((planet, id) => (
                    <div key={id} onClick={()=>showPlanet(id)} className="card">
                        <h3>{planet.name}</h3>
                        <img src={planetImages[id]}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
    }
}

export default PlanetsList