import { useEffect, useState } from 'react'
import { useParams, Link} from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../../globals"

export default function PeopleDetails () {
    const [person, setPerson] = useState([])

    let { id } = useParams()

    useEffect(() => {
        const getPerson = async () => {
            const responce = await axios.get(`${BASE_URL}people/${id}`)
            setPerson(responce)
        }
        getPerson()
    }, [])

    if (!person.data) {
        return (
            <h1>Waiting on Data</h1>
        )
    } else {
        return (
            <div>
            <h1>{person.data.name}</h1>
            <p>Homeworld: </p>
            <p>Birthyear: {person.data.birth_year}</p>
            <p>Height: {person.data.height}cm</p>
            <p>Weight: {person.data.mass}kg</p>
            <p>Hair Color: {person.data.hair_color}</p>
            <p>Eye Color: {person.data.eye_color}</p>
            <p>Skin Color: {person.data.skin_color}</p>
            <p>Gender: {person.data.gender}</p>
            <p>Starships:</p>
            <p>Vehicles:</p>
            <p>Films:</p>
            <Link to="/people">Back</Link>
        </div>
        )
    }

}