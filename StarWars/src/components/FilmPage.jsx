import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../globals'

const FilmPage = () => {

    const [film, setFilm] = useState('')

    let { id } = useParams()

    useEffect(()=>{
        const getFilm = async() => {
          const response = await axios.get(`${BASE_URL}/films/`)
          setFilm(response.data.results[id])
          console.log(response)
        }
        getFilm()
      },[])

    

return film ? (
    <div className="filmDetailsPage">
        <h2>Name: {film.title}</h2>
        <h3>Released: {film.release_date}</h3>
        <button><Link to='/films'>films</Link></button>
    </div>
) : <h3>Finding film...</h3>

}

export default FilmPage