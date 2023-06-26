import { BASE_URL } from "../../globals"
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function PeopleList () {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const getPeople = async () => {
            const responce = await axios.get(`${BASE_URL}people`)
            setPeople(responce)
        }
        getPeople()
        console.log(people)
    }, [])

    console.log(people)

    if (!people.data) {
        return (
            <h1>Waiting on loading</h1>
        )
    } else {
        return (
            <div className="main">
            {people.data.results.map((people, index) => (
                <div key={index} className="card">
                    <h1>{people.name}</h1>
                    <p>Height: {people.height}cm</p>
                    <p>Weight: {people.mass}kg</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Eye Color: {people.eye_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                    <p>Gender: {people.gender}</p>
                </div>
            ))}
        </div>
        )
    }


}