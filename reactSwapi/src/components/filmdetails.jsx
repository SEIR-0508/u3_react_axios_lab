import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function FilmDetails (props) {

    const [film, setFilm] = useState('')
    let { title } = useParams()

    useEffect(() => {
        let selectedFilm = props.films.find((film) => film.title === title)

        setFilm(selectedFilm)
    }, [props.films, title])

    return film ? (
        <div className='detail'>
            <div className='detail-header'>
                <h4>{film.title}</h4>
                <p>Opening Crawl: {film.opening_crawl}</p>
                <p>Director: {film.director}</p>
                <p>Producer: {film.producer}</p>
                <p>Release Date: {film.release_date}</p>
            </div>
        </div>
    )
: null}