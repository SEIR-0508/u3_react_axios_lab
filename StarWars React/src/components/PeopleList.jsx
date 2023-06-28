import { BASE_URL } from "../../globals"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import People from '../data/People.json'

export default function PeopleList () {
    const [people, setPeople] = useState([])
    const [peopleImg, setPeopleImg] = useState([])

    useEffect(() => {
        const getPeople = async () => {
            const responce = await axios.get(`${BASE_URL}people`)
            setPeopleImg(People)
            setPeople(responce)
        }
        getPeople()
    }, [])

    let navigate = useNavigate()

    const showPerson = (index) => {
        navigate(`${index}`)
    }

    if (!people.data) {
        return (
            <h1>Waiting on loading</h1>
        )
    } else {
        return (
            <div className="main">
            {people.data.results.map((people, index) => (
                <div key={index} className="card" onClick={() => {showPerson(index + 1)}}>
                    <h1>{people.name}</h1>
                    <img src={peopleImg[index].image} className="img" />
                </div>
            ))}
        </div>
        )
    }


}