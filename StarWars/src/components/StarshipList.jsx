import { useState, useEffect } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'

const StarshipList = () => {

const [starships, setStarships] = useState([])

useEffect(()=> {
    const getStarships = async () => {
    const response = await axios.get(`${BASE_URL}/starships/`)
    setStarships(response.data.results)
    console.log(response)
    console.log(starships)
    }

    getStarships()
}, [])



    return (
        <div className="starshipListPage">
            <h2>List of Starships</h2>
            {
                starships.map((starship, key) => (
                    <div key={key} className="card">
                        <h3>{starship.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default StarshipList