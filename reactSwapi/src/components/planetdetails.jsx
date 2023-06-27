import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PlanetDetails (props) {

    const [planet, setPlanet] = useState('')
    let { name } = useParams()

    useEffect(() => {
        let selectedPlanet = props.planets.find((planet) => planet.name === name)

        setPlanet(selectedPlanet)
    }, [props.planets, name])

    return planet ? (
        <div className='detail'>
            <div className='detail-header'>
                <h4>{planet.name}</h4>
                <p>Diameter: {planet.diameter}</p>
                <p>Climate: {planet.climate}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
            </div>
        </div>
    )
: null}