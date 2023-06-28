import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../globals";

const Species= () => {

    const [species, setSpecies] = useState([]);

    useEffect(() => {
        const getStuff = async () => {
            const spec_resp = await axios.get(`${BASE_URL}/species`);

            setSpecies(spec_resp.data.results);
        };

        getStuff();
    }, []);

    if (species.length===0) {
        return (
            <div className="loading">Loading Species...</div>
        )
    } else {
        return (
            <div className="species-grid">
                {
                    species.map((spec, idx) => (
                        <div className="species-div" key={idx}>
                            <Link to={`${idx}`} className="div-title-text">{spec.name}</Link>
                            <p>Classification: {spec.classification}</p>
                            <p>Average height: {spec.average_height}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
    
}

export default Species