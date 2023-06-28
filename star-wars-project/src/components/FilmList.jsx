import { FILMS_URL} from '../globals.js'
import { useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function FilmList({ films,setFilms }){

    let navigate = useNavigate()
    const showFilm = (film) =>{
        navigate(`${film.episode_id}`)
    }
    useEffect(()=>{
        const getFilmsAPI = async() =>{
          const response = await axios.get(FILMS_URL)
          setFilms(response.data.results)
        }
        getFilmsAPI()
      }, [])
    return films ? (
        <div>
        <Header />
        <div className='films list'>
            <h2>Films</h2>
                {films.map(film =>(
                    <div key={film.title} className='item' onClick={()=>(showFilm(film))}>
                        <h1>{film.title}</h1>
                        <span>Opening Credits: {film.opening_crawl}</span>
                    </div>
                ))}
        </div>
        </div>
    ) : <h3>Loading...</h3>
}