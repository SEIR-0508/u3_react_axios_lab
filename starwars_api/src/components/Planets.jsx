import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async () => {
        const response = await axios.get(`https://swapi.dev/api/planets`)
        setPlanets(response.data.results)
        }
        getPlanets()
    }, [])

    let navigate = useNavigate()

    const showPlanet = (key) => {
        navigate(`${key}`)
    }

    return (
        <div className='planets'>
            <h2>Planets</h2>
            {
                planets.map((planet, key) => (
                    <div key={key} onClick={()=>showPlanet(key)} className='card'>
                        <h3>Planet: {planet.name}</h3>
                        <h5>Population: {planet.population}</h5>
                        <h5>Climate: {planet.climate}</h5>
                        <h5>Terrain: {planet.terrain}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default Planets