import { useEffect, useState } from 'react'
import { useParams, Link} from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../../globals"

export default function FilmDetails () {
    const [film, setFilm] = useState('')
    let { id } = useParams()

    useEffect(() => {
        const getFilm = async () => {
            const responce = await axios.get(`${BASE_URL}films/${id}`)
            setFilm(responce)
        }
        getFilm()
    }, [])

    if (!film.data) {
        return (
            <h1>Waiting on data</h1>
        )
    } else {
        return (
            <div>
                <h1>{film.data.title}</h1>
                <p>Episode: {film.data.episode_id}</p>
                <p>Director: {film.data.director}</p>
                <p>Producer: {film.data.producer}</p>
                <p>Release Data: {film.data.release_date}</p>
                <p>Opening Crawl: {film.data.opening_crawl}</p>
                <p>Characters: </p>
                <p>Planets:</p>
                <p>Starships:</p>
                <p>Vehicles:</p>
                <p>Species:</p>
                <Link to="/films">Back</Link>
            </div>

        )
    }
}