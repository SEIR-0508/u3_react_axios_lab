import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const StarshipPage = () => {
    const [starship, setStarship] = useState('')
    let { id } = useParams()

    useEffect(()=>{
        const getStarship = async () => {
            const response = await axios.get(`https://swapi.dev/api/starships/`)
            //console.log(response.data)
            setStarship(response.data.results[id])
        }
        getStarship()
    }, [starship, id])

    console.log(starship)
    let BASE_URL = String("https://swapi.dev/api/starships/")
    let starshipUrl = String(starship.url)
    let start = starshipUrl.indexOf(BASE_URL)
    let end = start + BASE_URL.length

    let starShipSlash = starshipUrl.substring(0, start - 1) + starshipUrl.substring(end)
    let starshipNumber = starShipSlash.replace('/', '')
    console.log(starshipNumber)

    let starshipImage = `https://starwars-visualguide.com/assets/img/starships/${starshipNumber}.jpg`


    return starship ? (
        <div className="card">
            <h2>Name: {starship.name} </h2>
            <img src={starshipImage}/>
            <Link to="/starships">Return to starship list</Link>
        </div>
    ) : null;
}

export default StarshipPage