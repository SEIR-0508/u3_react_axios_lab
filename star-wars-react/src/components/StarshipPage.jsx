import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const StarshipPage = () => {
    const [starship, setStarship] = useState()
    let { index } = useParams()

    useEffect(()=>{
        const getStarship = async () => {
            const response = await axios.get(`https://swapi.dev/api/starships/${index}/`)
            //console.log(response.data)
            setStarship(response.data)
        }
        getStarship()
    }, [])

    console.log(starship)

    return (
        <div className="card">
            <h2>Name: {starship.name} </h2>
            <Link to="/starships">Return to starship list</Link>
        </div>
    ) 
}

export default StarshipPage