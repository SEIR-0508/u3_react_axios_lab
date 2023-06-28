import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { planets_url } from "../global";
import axios from "axios";

const PlanetDetails = () => {
    const [planet, setPlanet] = useState();
    const { id } = useParams();

    useEffect(() => {
        console.log(id, planets_url + id, planet);
        axios
            .get(planets_url + id)
            .then((response) => {
                console.log(response.data);
                setPlanet(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return planet ? (
        <div className="planet-details">
            <h2>{planet.name}</h2>
            <ul>
                <li><span>Rotation Period: </span>{planet.rotation_period}</li>
                <li><span>Orbital Period: </span>{planet.orbital_period}</li>
                <li><span>Diameter: </span>{planet.diameter}</li>
                <li><span>Climate: </span>{planet.climate}</li>
                <li><span>Gravity: </span>{planet.gravity}</li>
                <li><span>Terrain: </span>{planet.terrain}</li>
                <li><span>Surface Water: </span>{planet.surface_water}</li>
                <li><span>Population: </span>{planet.population}</li>
            </ul>
            <div></div>
            <button><Link to="/planets"> Return to Planet List</Link></button>
        </div>
    ) : <h3>Finding Planet...</h3>
}

export default PlanetDetails;