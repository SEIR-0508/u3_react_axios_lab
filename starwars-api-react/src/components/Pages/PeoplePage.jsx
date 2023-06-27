import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { BASE_URL } from '../../globals'
import axios from "axios"

const PersonDetails = () => {

    
    const [person, setPerson] = useState()
    
    let {id} = useParams()

    useEffect(()=>{
    const getPerson = async() => {
        const response = await axios.get(`${BASE_URL}people/`)
        setPerson(response.data.results[id])
    }
    getPerson()
    },[])


    return person ? (
    <div className="person-detail">
        <h2>Name: {person.name}</h2>
        <h2>Height: {person.height}</h2>
        <h2>Hair Color: {person.hair_color}</h2>
        <h2>Eye Color: {person.eye_color}</h2>
        <h2>Birthday: {person.birth_year}</h2>

        <Link to="/people"> Return to Character list</Link>
    </div>
    ) : <h3>Finding characters...</h3>
}

export default PersonDetails