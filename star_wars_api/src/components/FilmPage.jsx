import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FilmPage = (props) => {
  const [film, setFilm] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getFilm = async () => {
      let response = await axios.get(`https://swapi.dev/api/films/${id}/`);
      setFilm(response.data);
    };

    getFilm();
  }, []);

  if (film.length == 0) {
    return <h3>Loading... Please Wait...</h3>;
  } else {
    return (
      <div className="details-page">
        <h1>{film.title}</h1>
        <h4>Episode ID: {film.episode_id}</h4>
        <h4>Director: {film.director}</h4>
        <h4>Producer: {film.producer}</h4>
        <h4>Release Date: {film.release_date}</h4>
        <h4>Opening Crawl: {film.opening_crawl}</h4>
        <Link to="/films">
          <button className="details-btn">Go Back</button>
        </Link>
      </div>
    );
  }
};

export default FilmPage;
