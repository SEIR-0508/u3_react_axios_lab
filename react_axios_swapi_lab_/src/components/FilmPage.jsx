import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const FilmPage = () => {

    const [film, setFilm] = useState()
    //setting up the param to pull to be the ship's ID

    let {id} = useParams()

    useEffect(()=>{
        const getFilm = async() => {
            const response = await axios.get(`https://swapi.dev/api/films/`)
            setFilm(response.data.results[id])
        }
        getFilm()
    },[])

    if (!film) {return <h3>Loading Film</h3>}
    return (
        <div className="detail-div">
            <h2>{film.title}</h2>
            <p>Director: {film.director}</p>
            <p>Released: {film.release_date}</p>
            <p>{film.opening_crawl}</p>
            <Link to="/films" className="back-btn">Back</Link>
        </div>
    ) 
}

export default FilmPage