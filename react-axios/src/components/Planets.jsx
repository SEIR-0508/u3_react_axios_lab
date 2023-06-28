import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { planets_url } from '../global'
import axios from 'axios'

const Planets = () => {
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        const getPlanets = async (URL, total) => {
            const res = await axios.get(URL)
            total = total.concat(res.data.results)
            setPlanets(total)
            console.log(total, 'render once', res.data.next)
            if (res.data.next) {
                console.log(res.data.next)
                getPlanets(res.data.next, total)
            }
        }
        getPlanets(planets_url, [])
    }, [])

    const navigate = useNavigate()

    const showPlanets = (key) => {
        navigate(`${key}`)
    }

    return planets.length != 0 ? (
        <div className='planets'>
            <h2>Planet List</h2>
            <div className="grid">
                {planets.map(planet => (
                    <div key={planet.url.split('/').at(-2)} onClick={() => {showPlanets(planet.url.split('/').at(-2))}} className='card'>
                        <h3>{planet.name}</h3>
                    </div>
                ))}
            </div>
        </div>

    ) : <h2>Finding Planets...</h2>
}

export default Planets