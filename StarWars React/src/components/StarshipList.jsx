import { BASE_URL } from "../../globals"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Starship from '../data/Starship.json'

export default function StarshipList () {
    const [starships, setStarships] = useState([])
    const [starshipsImg, setStarshipsImg] = useState([])

    useEffect(() => {
        const getStarships = async () => {
            const responce = await axios.get(`${BASE_URL}starships`)
            setStarshipsImg(Starship)
            setStarships(responce)
        }
        getStarships()
    }, [])

    let navigate = useNavigate()

    const showStarship = (index) => {
        navigate(`${index}`)
    }

    if (!starships.data) {
        return (
            <h1>Waiting on data</h1>
        )
    } else {
        return (
            <div className="main">
                {starships.data.results.map((ships, index) => (
                <div key={index} className="card" onClick={() => {showStarship(index)}}>
                    <h1>{ships.name}</h1>
                    <img src={starshipsImg[index].image} className="img" />
                </div>
            ))}
            </div>
        )
    }

}