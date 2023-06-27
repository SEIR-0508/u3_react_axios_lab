import React, { useEffect, useState } from "react";
import axios from 'axios'


const FilmList = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        const  getFilms = async() => {
            const response = await axios.get('https://swapi.dev/api/films/')
            setFilms(response.data.results)
            console.log(response)
        }
        getFilms()
    },[])

    return (
        <div className="Film">
        <h2>List of Films</h2>
        {
          films.map((film, key) => (
            <div key={key} onClick={()=>showFilm(key)} className="card">
              <h3>{film.title}</h3>
            </div>
          ))
        }
      </div>
    )
}

export default FilmList

