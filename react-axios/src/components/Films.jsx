import { useState, useEffect } from "react"
import { films_url } from "../global"
import axios from "axios"

const Films = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {
        const getFilms = async() => {
            const res = await axios.get(films_url)
            console.log(res.data.results)
            setFilms(res.data.results)
        }
        getFilms()
    }, [])
console.log(films)

    return (
        <div className="films">
            {
                films.map(film => (
                    <ul key={film.episode_id} className="film">
                        <h3>{film.title}</h3>
                        <li>Director: {film.director}</li>
                        <li>Producer: {film.producer}</li>
                        <li>Release Date: {film.release_date}</li>
                        <p>{film.opening_crawl}</p>
                    </ul>
                ))
            }
        </div>
    )
}

export default Films