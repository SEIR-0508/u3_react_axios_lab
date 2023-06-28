import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const StarshipPage = () => {
    const [starship, setStarship] = useState('')
    let { id } = useParams()

    useEffect(()=> {
        const getStarship = async (url) => {
            let results = []
            while (url) {
                const response = await axios.get(url)
                const data = response.data
                results = results.concat(data.results)
                url = data.next
            }
            setStarship(results[id])
        }
        getStarship('https://swapi.dev/api/starships/')
    }, [starship, id])

    console.log(starship)
    let BASE_URL = String("https://swapi.dev/api/starships/")
    let starshipUrl = String(starship.url)
    let start = starshipUrl.indexOf(BASE_URL)
    let end = start + BASE_URL.length

    let starShipSlash = starshipUrl.substring(0, start - 1) + starshipUrl.substring(end)
    let starshipNumber = starShipSlash.replace('/', '')
    console.log(starshipNumber)
    let starshipImage = ""
    if (starshipNumber !== "2" && starshipNumber !== "3" && starshipNumber !== "17") {
     starshipImage = `https://starwars-visualguide.com/assets/img/starships/${starshipNumber}.jpg`
    } else if (starshipNumber === "2") {
        starshipImage = "https://64.media.tumblr.com/a89a0a93f53f06428b9c7011722b7ed3/tumblr_pcz55hSDGW1uf0h9xo3_500.jpg"
    } else if (starshipNumber === "3") {
        starshipImage = "https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg"
    } else {
        starshipImage = "https://swrpggm.com/wp-content/uploads/2021/02/GR75_FE.png"
    }

    if (starship.length === 0) {
        return <h2>Loading...</h2>
    } else {
    return (
        <div className="individualCard">
        <h2 className="individualTitle">{starship.name} </h2>
        <div class="individualDisplay">
        <div className="titleInfo">
        <img src={starshipImage}/>
        </div>
        <div className="additionalInfo">
        <p><strong>Model:</strong> {starship.model}</p>
        <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
        <p><strong>Cost in Credits:</strong> {starship.cost_in_credits}</p>
        <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
        <p><strong>Crew:</strong> {starship.crew}</p>
        <p><strong>Passengers:</strong> {starship.passengers}</p>
        <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
        <p><strong>Consumables:</strong> {starship.consumables}</p>
        <p><strong>Hypderdrive Rating:</strong> {starship.hyperdrive_rating}</p>
        <p><strong>Starship Class:</strong> {starship.starship_class}</p>
        <Link class="goBack" to="/characters">Return to character list</Link>
        </div>
        </div>
    </div>
    )
    }
}

export default StarshipPage