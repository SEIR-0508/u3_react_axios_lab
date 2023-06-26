import { BASE_URL } from "../../globals"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function SpeciesList () {
    const [species, setSpecies] = useState([])

    useEffect(() => {
        const getSpecies = async () => {
            const responce = await axios.get(`${BASE_URL}species`)
            setSpecies(responce)
        }
        getSpecies()
    }, [])

    console.log(species)

    if (!species.data) {
        return (
            <h1>Waiting on data</h1>
        )
    } else {
        return (
            <div className="main">
                {species.data.results.map((species, index) => (
                    <div key={index} className="card">
                        <h1>{species.name}</h1>
                        <p>Classification: {species.classification}</p>
                        <p>Designation:</p>
                        <p>Language: {species.language}</p>
                        <p>Avg. Height: {species.average_height}cm</p>
                        <p>Avg. Lifespan {species.average_lifespan} yrs</p>
                    </div>
                ))}
            </div>
        )
    }
}