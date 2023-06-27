import { useEffect, useState } from "react";
import { useParams, useLocation, Link} from "react-router-dom";
import Films from "./Films";




export default function FilmDetails(props) {


let {id} = useParams()
let location = useLocation()
let film = location.state.film
console.log(film)

  return film ? (
    <div className="card">
      <h2>Name: {film.title}</h2>
      <p>Model: {film.episode_id}</p>
      <p>{film.opening_crawl}</p>
      <p>Director : {film.director}</p>
      <p>Producer : {film.producer}</p>
      <p>Release date : {film.release_date}</p>
      
      <Link to="/films"> Return to films list</Link>
    </div>
  ) : (
    <h3>Loading films...</h3>
  );
  
}