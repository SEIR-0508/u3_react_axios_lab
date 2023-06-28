import { useEffect, useState } from 'react'
import { useParams, Link} from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../../globals"

export default function SpeciesDetails () {
    const [species, setSpecies] = useState('')
    let { id } = useParams()

    useEffect(() => {
        const getSpecies = async () => {
            const responce = await axios.get(`${BASE_URL}species/${id}`)
            setSpecies(responce)
        }
        getSpecies()
    }, [])

    if (!species.data) {
        return (
            <h1>Waiting on Data</h1>
        )
    } else {
        return (
            <div>
            <h1>{species.data.name}</h1>
            <p>Classification: {species.data.classification}</p>
            <p>Designation: {species.data.designation}</p>
            <p>Average Height: {species.data.average_height} m</p>
            <p>Average Lifespan: {species.data.average_lifespan} years</p>
            <p>Skin Colors: {species.data.skin_colors}</p>
            <p>Hair Colors: {species.data.hair_colors}</p>
            <p>Eye Colors: {species.data.eye_color}</p>
            <p>Language: {species.data.language}</p>
            <p>Homeworld: </p>
            <p>People: </p>
            <p>Films: </p>
            <Link to="/species">Back</Link>
        </div>
        )
    }
}