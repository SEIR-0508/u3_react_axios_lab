import { BASE_URL } from "../../globals"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Film from '../data/Films.json'

export default function FilmList () {
    const [films, setFilms] = useState([])
    const [filmImg, setFilmImg] = useState([])

    useEffect(() => {
        const getFilms = async () => {
            const responce = await axios.get(`${BASE_URL}films`)
            setFilmImg(Film)
            setFilms(responce)
        }
        getFilms()
    }, [])

    let navigate = useNavigate()

    const showFilms = (index) => {
        navigate(`${index}`)
    }

    if (!films.data) {
        return (
            <h1>waiting on data</h1>
        )
    } else {
        return (
            <div className="main">
                {films.data.results.map((film, index) => (
                    <div key={index} className="card" onClick={() => showFilms(index + 1)}>
                        <h1>{film.title}</h1>
                        <img src={filmImg[index].image} className="img" />
                    </div>
                ))}
            </div>
        )
    }
}
