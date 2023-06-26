import { FILMS_URL} from '../globals.js'
import { useEffect } from 'react'
import axios from 'axios'
import Header from './Header'

export default function FilmList({ films,setFilms }){
    useEffect(()=>{
        const getFilmsAPI = async() =>{
          const response = await axios.get(FILMS_URL)
          setFilms(response.data.results)
        }
        getFilmsAPI()
      }, [])
    return(
        <div>
        <Header />
        <div className='films'>
            <h2>Films</h2>
            <ul>
                {films.map(film =>(
                    <li key={film.title}>{film.title}</li>
                ))}
            </ul>
        </div>
        </div>
    )
}