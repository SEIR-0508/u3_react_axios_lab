import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const FilmsList = () => {

    const [films, setFilms] = useState([])

    useEffect(()=>{
        const getFilms = async() => {
          const response = await axios.get(`${BASE_URL}films/`)
          setFilms(response.data.results)
          console.log(response)
        }
        getFilms()
      },[])

      
      return(
        <div className="film">
          <h2>List of Films</h2>
          {
            films.map((film) => (
              <div key={film.title} className="film-name">
                <h3>{film.title}</h3>
              </div>
            ))
          }
        </div>
      )
      }

export default FilmsList