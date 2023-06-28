import axios from "axios";
import { useState, useEffect} from "react";
import { BASE_URL } from "../globals";
import { Link } from "react-router-dom";

const StarshipList = () => {

    const [starships, setStarships] = useState([]);

    useEffect(() => {
        const getStuff = async () => {
            const ship_resp = await axios.get(`${BASE_URL}/starships`);
            console.log(ship_resp.data.results);
            // inside of my UseEffect, I am keeping data in State //
    
            setStarships(ship_resp.data.results);
        };
    
        getStuff();
    }, []);

    // const navigate = useNavigate();

    // const showShip = (value) => {
    //     navigate(value);
    // }

    // const starship_map = starships.map((ship) => [`${ship.name}`, ship])
    // console.log(starship_map)
    
    if (starships.length===0) {return <div className="loading">Loading Starships...</div>}

    return (
            <div className="starship-grid">
                {
                    starships.map((ship, idx) => (
                        <div className="starship-div" key={idx}>
                            <Link to={`${idx}`} className="div-title-text">{ship.name}</Link>
                            <p>Cost: {ship.cost_in_credits}</p>
                            <p>Passenger Capacity: {ship.passengers}</p>
                            {/* <button onClick={()=> showShip(`${idx}`)}>click</button> */}
                        </div>
                    ))
                }
        </div>
        
    )
    
    
}

export default StarshipList