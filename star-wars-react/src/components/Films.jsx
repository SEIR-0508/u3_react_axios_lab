import { useState, useEffect } from 'react'
import axios from 'axios'

const FilmsList = () => {
    const [films, setFilms] = useState([])

    useEffect(()=> {
        const getFilms = async () => {
            const response = await axios.get('https://swapi.dev/api/films')
            //console.log(response.data.results)
            setFilms(response.data.results)
        }
        getFilms()
    }, [])

    //console.log(starships)

    return (
        <div className="grid">
            {
                films.map((film)=> (
                    <div
                    className="card">
                        <h3> Title: {film.title} </h3>
                        <p> Director: {film.director} </p>
                        <p> Producer: {film.producer} </p>
                        <p> Release Date: {film.release_date} </p>
                        <p> Opening Crawl: {film.opening_crawl} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default FilmsList