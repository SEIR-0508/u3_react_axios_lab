import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Nav from './Nav'

export default function FilmDetails(){

const [film, setFilm] = useState()
let {id} = useParams()

useEffect(()=>{
  const getFilm = async() => {
    const response = await axios.get(`https://swapi.dev/api/films/`)
    setFilm(response.data.results[id])
  }
  getFilm()
}, [])


return film ? (
  <div className="detail">
    <Nav />
      <Link to="/films" className="details-back-button"> Return to Films</Link>
    <div className="data-container2">
      <h2 className='starship-item-title'>{film.title}</h2>
      <hr />
      <div className="data-grid">
        <h3 className="data-title">Episode:</h3>
        <p className="data-info">{film.episode_id}</p>
        <h3 className="data-title">Director:</h3>
        <p className="data-info">{film.director}</p>
        <h3 className="data-title">Producers:</h3>
        <p className="data-info">{film.producer}</p>
        <h3 className="data-title">Release Date:</h3>
        <p className="data-info">{film.release_date}</p>
      </div>
      <div className="opening-crawl-data">
        <h3 className="opening-crawl-title">Opening Crawl:</h3>
        <p className="opening-crawl-blurb">{film.opening_crawl}</p>
      </div>    
    </div>
  </div>
) : <h3 className='loading'>Finding data...</h3>
}