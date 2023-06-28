import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const FilmPage = () => {
    const [film, setFilm] = useState('')
    let { id } = useParams()

    useEffect(()=> {
        const getFilm = async (url) => {
            let results = []
            while (url) {
                const response = await axios.get(url)
                const data = response.data
                results = results.concat(data.results)
                url = data.next
            }
            setFilm(results[id])
        }
        getFilm('https://swapi.dev/api/films/')
    }, [film, id])

    console.log(film)

    let BASE_URL = String("https://swapi.dev/api/films/")
    let filmUrl = String(film.url)
    let start = filmUrl.indexOf(BASE_URL)
    let end = start + BASE_URL.length

    let filmSlash = filmUrl.substring(0, start - 1) + filmUrl.substring(end)
    let filmNumber = filmSlash.replace('/', '')
    console.log(filmNumber)

    let filmImage = `https://starwars-visualguide.com/assets/img/films/${filmNumber}.jpg`

    if (film.length === 0) {
        return <h2>Loading...</h2>
    } else {
    return (
        <div className="individualCard">
        <h2 className="individualTitle">{film.title} </h2>
        <div class="individualDisplay">
        <div className="titleInfo">
        <img src={filmImage}/>
        </div>
        <div className="additionalInfo">
        <p><strong>Episode: </strong>{film.episode_id}</p>
        <p><strong>Opening Crawl: </strong>{film.opening_crawl}</p>
        <p><strong>Director: </strong>{film.director}</p>
        <p><strong>Producer: </strong>{film.producer}</p>
        <p><strong>Release Date: </strong>{film.release_date}</p>
        <Link class="goBack" to="/films">Return to film list</Link>
        </div>
        </div>
    </div>
    )
    }
}

export default FilmPage