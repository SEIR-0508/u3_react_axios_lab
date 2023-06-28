import {useEffect,useState} from 'react'
import { useParams,Link } from "react-router-dom"
import Header from './Header'

export default function FilmDetails({ films }){
    const [film, setFilm] = useState('')
    let { episode_id } = useParams()
    console.log(useParams())
    useEffect(()=>{
        let selectedFilm = films.find(film=>(film.episode_id === parseInt(episode_id)))
        setFilm(selectedFilm)
    },[film, episode_id])
    return film ? (
        <div>
        <Header />
        <button class='filmlist-button'><Link to='/film'>Back to Films</Link></button>
        <div className='details'>
            <h1>{film.title}</h1>
            <p>Episode {film.episode_id}</p>
            <p>Director: {film.director}</p>
            <p>Release Date: {film.release_date}</p>
            <p>{film.opening_crawl}</p>
        </div>
        </div>
    ) : <h3>Loading...</h3>
}