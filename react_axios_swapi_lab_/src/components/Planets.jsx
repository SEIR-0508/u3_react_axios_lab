import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../globals";

const Planets= () => {

    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const getStuff = async () => {
            const planets_resp = await axios.get(`${BASE_URL}/planets`);
            
            setPlanets(planets_resp.data.results);
        };

        getStuff();
    }, []);


    if (planets.length===0) {return <div className="loading">Loading Planets...</div>} 
    return (
        <div className="planets-grid">
            {
                planets.map((planet, idx) => (
                    <div className="planets-div" key={idx}>
                        <Link to={`${idx}`} className="div-title-text">{planet.name}</Link>
                        <p>Population: {planet.population}</p>
                    </div>
                ))
            }
        </div>
    )
    
    
}

export default Planets