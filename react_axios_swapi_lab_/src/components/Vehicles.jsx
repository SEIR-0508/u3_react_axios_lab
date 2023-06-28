import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../globals";

const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const getStuff = async () => {
            const vehi_resp = await axios.get(`${BASE_URL}/vehicles`);

            console.log(vehi_resp.data.results);
            // inside of my UseEffect, I am keeping data in State //

            setVehicles(vehi_resp.data.results);
        };

        getStuff();
    }, []);

    if (vehicles.length === 0) { return <div className="loading">Loading Vehicles...</div> } 
    
    return (
        <div className="vehicles-grid">
            {
                vehicles.map((vehi, idx) => (
                    <div className="vehicles-div" key={idx}>
                        <Link to={`${idx}`} className="div-title-text">{vehi.name}</Link>
                        <p>Manufacturer: {vehi.manufacturer}</p>
                        <p>Cost: {vehi.cost_in_credits}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Vehicles