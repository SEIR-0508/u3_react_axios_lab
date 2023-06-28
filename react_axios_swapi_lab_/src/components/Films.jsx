import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../globals";


const Films= () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const getStuff = async () => {
            const films_resp = await axios.get(`${BASE_URL}/films`);
            setFilms(films_resp.data.results);  
        };

        getStuff();
    }, []);


    if (films.length===0) { return <div className="loading">Loading Films...</div> } 

    return (
        <div className="films-grid">
            {
                films.map((film, idx) => (
                    <div className="films-div" key={film.episode_id}>
                        <Link to={`${idx}`} className="div-title-text">{film.title}</Link>
                        <p>Director: {film.director}</p>
                    </div>
                ))
            }
        </div>
    )
    
    
}

export default Films