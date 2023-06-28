import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../globals";

const Characters= () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getStuff = async () => {
            const char_resp = await axios.get(`${BASE_URL}/people`);
        
            setCharacters(char_resp.data.results);
        };

        getStuff();
    }, []);

    if (characters.length===0) { return <div className="loading">Loading Characters...</div> } 

    return (
        <div className="characters-grid">
            {
                characters.map((char, idx) => (
                    <div className="characters-div" key={idx}>
                        <Link to={`${idx}`} className="div-title-text">{char.name}</Link>
                        <p>Height: {char.height}</p>
                    </div>
                ))
            }
        </div>
    )
    
    
}

export default Characters