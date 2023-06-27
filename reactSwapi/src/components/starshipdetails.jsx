import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function StarshipDetails (props) {

    const [starship, setStarship] = useState('')
    let { name } = useParams()

    useEffect(() => {
        let selectedStarship = props.starships.find((starship) => starship.name === name)

        setStarship(selectedStarship)
    }, [props.starships, name])

    return starship ? (
        <div className='detail'>
            <div className='detail-header'>
                <h4>{starship.name}</h4>
                <p>Diameter: {starship.cost_in_credits}</p>
                <p>Climate: {starship.length}</p>
                <p>Max Speed: {starship.max_atmosphering_speed}</p>
                <p>Crew: {starship.crew}</p>
                <p>Passengers: {starship.passengers}</p>
                <p>Cargo Capacity: {starship.cargo_capacity}</p>
                <p>Consumables: {starship.consumables}</p>
                <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
                <p>MGLT: {starship.MGLT}</p>
            </div>
        </div>
    )
: null}