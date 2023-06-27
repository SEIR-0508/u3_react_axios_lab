import { useState, useEffect } from 'react'
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

    console.log(planets)

    return planets.length != 0 ? (
        <div className='planets'>
            <h2>Planets List</h2>
            <div className="grid">
                {planets.map(planet => (
                    <div key={planet.name} className='card'>
                        <h3>{planet.name}</h3>
                        {/* <li>Terrain: {planet.terrain}</li>
                    <li>Diameter: {planet.diameter}</li>
                    <li>Gravity: {planet.gravity}</li> */}
                    </div>
                ))}
            </div>
        </div>

    ) : <h2>Finding Planets...</h2>
}

export default Planets