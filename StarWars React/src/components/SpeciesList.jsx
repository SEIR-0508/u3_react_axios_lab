import { BASE_URL } from "../../globals"
import { useState, useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom' 
import axios from 'axios'
import Species from '../data/Species.json'

export default function SpeciesList () {
    const [species, setSpecies] = useState([])
    const [speciesImg, setSpeciesImg] = useState([])

    useEffect(() => {
        const getSpecies = async () => {
            const responce = await axios.get(`${BASE_URL}species`)
            setSpeciesImg(Species)
            setSpecies(responce)
        }
        getSpecies()
    }, [])

    let navigate = useNavigate()

    const showSpecies = (index) => {
        navigate(`${index}`)
    }

    if (!species.data) {
        return (
            <h1>Waiting on data</h1>
        )
    } else {
        return (
            <div className="main">
                {species.data.results.map((species, index) => (
                    <div key={index} className="card" onClick={() => {showSpecies(index + 1)}}>
                        <h1>{species.name}</h1>
                        <img src={speciesImg[index].image} className="img" />
                    </div>
                ))}
            </div>
        )
    }
}