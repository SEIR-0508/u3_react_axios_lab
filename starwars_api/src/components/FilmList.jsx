import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FilmList = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async () => {
        const response = await axios.get(`https://swapi.dev/api/films`)
        setFilms(response.data.results)
        }
        getFilms()
    }, [])

    let navigate = useNavigate()

    const showFilm = (key) => {
        navigate(`${key}`)
    }

    return (
        <div className='films'>
            <h2>Films</h2>
            {
                films.map((film, key) => (
                    <div key={key} onClick={()=>showFilm(key)} className='card'>
                        <h3>EPISODE {film.episode_id}: {film.title}</h3>
                        <h5>DIRECTED BY: {film.director}</h5>
                        <h5>PRODUCED BY: {film.producer}</h5>
                        <h5>DATE RELEASED: {film.release_date}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default FilmList