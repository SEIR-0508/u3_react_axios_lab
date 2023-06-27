import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import { useNavigate } from "react-router-dom"

const FilmsList = () => {

    const [films, setFilms] = useState()

    useEffect(()=>{
        const getFilms = async() => {
          const response = await axios.get(`${BASE_URL}films/`)
          setFilms(response.data.results)
          console.log(response)
        }
        getFilms()
      },[])

      let navigate = useNavigate()

      const showFilm = (key) => {
        navigate(`${key}`)
      }
      
      return films ?(
        <div className="film">
          <h2>List of Films</h2>
          {
            films.map((film, key) => (
              <div key={key} onClick={()=>showFilm(key)} className="film-name">
                <h3>{film.title}</h3>
              </div>
            ))
          }
        </div>
      ) : <h3> Finding all films... </h3>
      }

export default FilmsList