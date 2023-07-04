import { useState, useEffect } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'
import { useNavigate } from 'react-router-dom'

const FilmList = () => {

const [films, setFilms] = useState(null)

useEffect(()=> {
    const getFilms = async () => {
    const response = await axios.get(`${BASE_URL}/films/`)
    setFilms(response.data.results)
    console.log(response)
    console.log(films)
    }
    getFilms()
}, [])

let navigate = useNavigate()

const showFilm = (key) => {
    navigate(`${key}`)
}

    return films ? (
        <div className="filmListPage">
            <h2>List of films</h2>
            {
                films.map((film, key) => (
                    <div className="filmCard" key={key} onClick={() => showFilm(key)}>
                        <h3>{film.title}</h3>
                    </div>
                ))
            }
        </div>
    ) : (<h3>Searching for films...</h3>)
}

export default FilmList