import { BASE_URL } from "../../globals"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Planet from '../data/Planet.json'

export default function PlanetsList () {
    const [planets, setPlanets] = useState([])
    const [planetImg, setPlanetImg] = useState([])

    useEffect(() => {
        const getPlanet = async () => {
            const responce = await axios.get(`${BASE_URL}planets`)
            setPlanetImg(Planet)
            setPlanets(responce)
        }
        getPlanet()
    }, [])

    let navigate = useNavigate()

    const showPlanet = (index) => {
        navigate(`${index}`)
    }

    console.log(planets.data)

    if (!planets.data) {
        return (
            <h1>Waiting on data to load</h1>
        )
    } else {
        return (
            <div className="main">
            {planets.data.results.map((planet, index) => (
                <div key={index} className="card" onClick={() => {showPlanet(index + 1)}}>
                    <h1>{planet.name}</h1>
                    <img src={planetImg[index].image} className="img" />
                </div>
            ))}
        </div>
        )
    }
}