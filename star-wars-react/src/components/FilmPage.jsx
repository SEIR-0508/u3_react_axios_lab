import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const FilmPage = () => {
    const [film, setFilm] = useState('')
    let { id } = useParams()

    useEffect(()=>{
        const getFilm = async () => {
            const response = await axios.get(`https://swapi.dev/api/films/`)
            //console.log(response.data)
            setFilm(response.data.results[id])
        }
        getFilm()
    }, [film, id])

    console.log(film)

    return film ? (
        <div className="card">
            <h2>Name: {film.title} </h2>
            <Link to="/films">Return to film list</Link>
        </div>
    ) : null;
}

export default FilmPage