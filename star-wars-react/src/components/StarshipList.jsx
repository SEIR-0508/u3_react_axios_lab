import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StarshipList = () => {
    const [starships, setStarships] = useState([])

    useEffect(()=> {
        const getStarships = async (url) => {
            let results = []
            while (url) {
                const response = await axios.get(url)
                const data = response.data
                results = results.concat(data.results)
                url = data.next
            }
            setStarships(results)
        }
        getStarships('https://swapi.dev/api/starships/')
    }, [starships])

    let navigate = useNavigate()

    const showShip = (id) => {
        navigate(`${id}/`)
    }

    const starshipImages = []

    for (let i=0; i<starships.length; i++) {
        let BASE_URL = String("https://swapi.dev/api/starships/")
        let starshipUrl = String(starships[i].url)
        let start = starshipUrl.indexOf(BASE_URL)
        let end = start + BASE_URL.length

        let starShipSlash = starshipUrl.substring(0, start - 1) + starshipUrl.substring(end)
        let starshipNumber = starShipSlash.replace('/', '')
        console.log(starshipNumber)
    if (starshipNumber !== "2" && starshipNumber !== "3" && starshipNumber !== "17") {
     starshipImages.push(`https://starwars-visualguide.com/assets/img/starships/${starshipNumber}.jpg`)
    } else if (starshipNumber === "2") {
        starshipImages.push("https://64.media.tumblr.com/a89a0a93f53f06428b9c7011722b7ed3/tumblr_pcz55hSDGW1uf0h9xo3_500.jpg")
    } else if (starshipNumber === "3") {
        starshipImages.push("https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg")
    } else if (starshipNumber === "35") {
        starshipImages.push("https://lumiere-a.akamaihd.net/v1/images/v-wing-main_37a7dec1.jpeg")
    } else {
        starshipImages.push("https://swrpggm.com/wp-content/uploads/2021/02/GR75_FE.png")
    }
    }
    
    if (starships.length === 0) {
        return <h2>Loading...</h2>
    } else {
    return  (
        <div className="starships">
            <h2>Starships</h2>
            <div class="starship">
            {
                starships.map((starship, id) => (
                    <div key={id} onClick={()=>showShip(id)} className="card">
                        <h3>{starship.name}</h3>
                        <img src={starshipImages[id]}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
    }
}

export default StarshipList