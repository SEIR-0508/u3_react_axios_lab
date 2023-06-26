import { BASE_URL } from "../../globals"
import { useState, useEffect } from "react"
import axios from 'axios'

export default function FilmList () {
    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const responce = await axios.get(`${BASE_URL}/films`)
            setFilms(responce)
        }
        getFilms()
    }, [])

    console.log(films)

    if (!films.data) {
        return (
            <h1>waiting on data</h1>
        )
    } else {
        return (
            <div className="main">
                {films.data.results.map((film, index) => (
                    <div key={index} className="card">
                        <h1>{film.title}</h1>
                        <p>Release Date: {film.release_date}</p>
                        <p>Episode: {film.episode_id}</p>
                    </div>
                ))}
            </div>
        )
    }
}
