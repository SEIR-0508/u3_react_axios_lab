import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StarshipsList = () => {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        const getStarships = async () => {
        const response = await axios.get(`https://swapi.dev/api/starships`)
        setStarships(response.data.results)
        }
        getStarships()
    }, [])

    let navigate = useNavigate()

    const showShip = (key) => {
        navigate(`${key}`)
    }

    return (
        <div className='starships'>
            <h2>Starships</h2>
            {
                starships.map((starship, key) => (
                    <div key={key} onClick={()=>showShip(key)} className='card'>
                        <h3>{starship.name}</h3>
                        <h5>MODEL: {starship.model}</h5>
                        <h5>MANUFACTURED BY: {starship.manufacturer}</h5>
                        <h5>CREW SIZE: {starship.crew} Crew Members</h5>
                        <h5>HYPERDRIVE RATING: {starship.hyperdrive_rating}</h5>
                        <h5>MAXIMUM PASSENGER CAPACITY: {starship.passengers} passengers </h5>
                    </div>
                ))
            }
        </div>
    )
}

export default StarshipsList