import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StarshipList = () => {
    const [starships, setStarships] = useState([])

    useEffect(()=> {
        const getStarships = async () => {
            const response = await axios.get(`https://swapi.dev/api/starships/`)
            console.log(response.data.results)
            setStarships(response.data.results)
        }
        getStarships()
    }, [starships])

    let navigate = useNavigate()

    const showShip = (id) => {
        navigate(`${id}/`)
    }

    return (
        <div className="starship">
            <h2>Starships</h2>
            {
                starships.map((starship, id) => (
                    <div key={id} onClick={()=>showShip(id)} className="card">
                        <h3>{starship.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default StarshipList