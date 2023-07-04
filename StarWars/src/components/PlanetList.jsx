import { useState, useEffect } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'
import { useNavigate } from 'react-router-dom'

const PlanetList = () => {

const [planets, setPlanets] = useState(null)

useEffect(()=> {
    const getPlanets = async () => {
    const response = await axios.get(`${BASE_URL}/planets/`)
    setPlanets(response.data.results)
    console.log(response)
    console.log(planets)
    }

    getPlanets()
}, [])

let navigate = useNavigate()

const showPlanet = (key) => {
    navigate(`${key}`)
}

    return planets ? (
        <div className="planetListPage">
            <h2>List of Planets</h2>
            {
                planets.map((planet, key) => (
                    <div className="planetCard" key={key} onClick={() => showPlanet(key)}>
                        <h3>{planet.name}</h3>
                    </div>
                ))
            }
        </div>
    ) : (<h3>Searching for planets...</h3>)
}

export default PlanetList