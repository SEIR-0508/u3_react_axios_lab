import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FilmsList = () => {
    const [films, setFilms] = useState([])

    useEffect(()=> {
        const getFilms = async () => {
            const response = await axios.get(`https://swapi.dev/api/films/`)
            console.log(response.data.results)
            setFilms(response.data.results)
        }
        getFilms()
    }, [films])

    let navigate = useNavigate()

    const showFilm = (id) => {
        navigate(`${id}/`)
    }

    return (
        <div className="film">
            <h2>Films</h2>
            {
                films.map((film, id) => (
                    <div key={id} onClick={()=>showFilm(id)} className="card">
                        <h3>{film.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default FilmsList