
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function FilmPage(){


const [film, setFilm] = useState()
let {id} = useParams()

useEffect(()=>{
  const getFilm = async() => {
    const response = await axios.get(`https://swapi.dev/api/films/`)
    setFilm(response.data.results[id])
  }
  getFilm()
},[])


return film ? (
  <div className="detail">
    <h2>Title: {film.title}</h2>
    <div>Director: {film.director}</div>
    <div>producer: {film.producer}</div>
    <div>Release Date: {film.release_date}</div>
    <Link to="/films"> Return to film list</Link>
  </div>
) : <h3>Finding films...</h3>
}
