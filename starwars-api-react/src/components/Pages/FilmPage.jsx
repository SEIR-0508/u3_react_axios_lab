import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { BASE_URL } from '../../globals'
import axios from "axios"

const FilmDetails = () => {

    
    const [film, setFilm] = useState()
    
    let {id} = useParams()

    useEffect(()=>{
    const getFilm = async() => {
        const response = await axios.get(`${BASE_URL}films/`)
        setFilm(response.data.results[id])
    }
    getFilm()
    },[])


    return film ? (
    <div className="film-detail">
        <h2>Title: {film.title}</h2>
        <h2>Episode: {film.episode_id}</h2>
        <h2>Opening Crawl: {film.opening_crawl}</h2>
        <h2>Director: {film.director}</h2>
        <h2>Producers: {film.producer}</h2>
        <h2>Release Date: {film.release_date}</h2>

        <Link to="/films"> Return to film list</Link>
    </div>
    ) : <h3>Finding films...</h3>
}

export default FilmDetails
