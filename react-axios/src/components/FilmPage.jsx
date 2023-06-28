import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { films_url } from "../global";
import axios from "axios";

const FilmDetails = () => {
    const { id } = useParams();
    const [film, setFilm] = useState();

    useEffect(() => {
        axios
          .get(films_url + id)
          .then((res) => {
                setFilm(res.data);
            })
          .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return film ? (
        <div className="film-details">
            <h2>{film.title}</h2>
            <ul>
                <li><span>Episode: </span>{film.episode_id}</li>
                <li><span>Director: </span>{film.director}</li>
                <li><span>Producer: </span>{film.producer}</li>
                <li><span>Release Date: </span>{film.release_date}</li>
                <li><span>Opening Crawl: </span>{film.opening_crawl}</li>
            </ul>
            <div></div>
            <button><Link to="/films">Return to Film List</Link></button>
        </div>
    ) : <h3>Finding film...</h3>
}

export default FilmDetails;