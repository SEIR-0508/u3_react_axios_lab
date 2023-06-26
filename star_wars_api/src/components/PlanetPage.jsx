import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PlanetPage = (props) => {
  const [planet, setPlanet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPlanet = async () => {
      let response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      setPlanet(response.data);
    };

    getPlanet();
  }, []);

  if (planet.length == 0) {
    return <h3>Loading... Please Wait...</h3>;
  } else {
    return (
      <div className="details-page">
        <h1>{planet.name}</h1>
        <h4>Rotation Period: {planet.rotation_period}</h4>
        <h4>Orbital Period: {planet.orbital_period}</h4>
        <h4>Diameter: {planet.diameter}</h4>
        <h4>Climate: {planet.climate}</h4>
        <h4>Gravity: {planet.gravity}</h4>
        <h4>Terrain: {planet.terrain}</h4>
        <h4>Surface Water: {planet.surface_water}</h4>
        <Link to="/planets">
          <button className="details-btn">Go Back</button>
        </Link>
      </div>
    );
  }
};

export default PlanetPage;
