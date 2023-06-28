import { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import Header from './Header'

export default function PlanetDetails({ planets }){
    const [planet, setPlanet] = useState('')
    let { diameter } = useParams()

    useEffect(()=>{
        let selectedPlanet = planets.find(planet=>(planet.diameter === diameter))
        setPlanet(selectedPlanet)
    })
    return planet ? (
        <div>
        <Header />
        <button class='planetlist-button'><Link to='/planet'>Back to Planets</Link></button>
        <div className='details'>
            <h1>{planet.name}</h1>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
        </div>
        </div>
    ) : <h3>Loading...</h3>
}