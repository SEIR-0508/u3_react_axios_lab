import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FilmsList = () => {
    const [films, setFilms] = useState([])

    useEffect(()=> {
        const getFilms = async (url) => {
            let results = []
            while (url) {
                const response = await axios.get(url)
                const data = response.data
                results = results.concat(data.results)
                url = data.next
            }
            setFilms(results)
        }
        getFilms('https://swapi.dev/api/films/')
    }, [films])

    let navigate = useNavigate()

    const showFilm = (id) => {
        navigate(`${id}/`)
    }

    const filmImages = []

    for (let i=0; i<films.length; i++) {
        let BASE_URL = String("https://swapi.dev/api/films/")
        let filmUrl = String(films[i].url)
        let start = filmUrl.indexOf(BASE_URL)
        let end = start + BASE_URL.length

        let filmSlash = filmUrl.substring(0, start - 1) + filmUrl.substring(end)
        let filmNumber = filmSlash.replace('/', '')
        console.log(filmNumber)
        filmImages.push(`https://starwars-visualguide.com/assets/img/films/${filmNumber}.jpg`)
    }

    if (films.length === 0) {
        return <h2>Loading...</h2>
    } else {
    return (
        <div className="films">
            <h2>Films</h2>
            <div class="film">
            {
                films.map((film, id) => (
                    <div key={id} onClick={()=>showFilm(id)} className="card">
                        <h3>{film.title}</h3>
                        <img src={filmImages[id]}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
    }
}

export default FilmsList