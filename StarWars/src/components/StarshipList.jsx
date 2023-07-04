import { useState, useEffect } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'
import { useNavigate } from 'react-router-dom'

const StarshipList = () => {

const [starships, setStarships] = useState(null)

useEffect(()=> {
    const getStarships = async () => {
    const response = await axios.get(`${BASE_URL}/starships/`)
    setStarships(response.data.results)
    console.log(response)
    console.log(starships)
    }
    getStarships()
}, [])

let navigate = useNavigate()

const showStarship = (key) => {
    navigate(`${key}`)
}

    return starships ? (
        <div className="starshipListPage">
            <h2>List of Starships</h2>
            {
                starships.map((starship, key) => (
                    <div className="starshipCard" key={key} onClick={() => showStarship(key)}>
                        <h3>{starship.name}</h3>
                    </div>
                ))
            }
        </div>
    ) : (<h3>Searching for starships...</h3>)
}

export default StarshipList