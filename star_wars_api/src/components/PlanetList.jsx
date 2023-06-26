import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      let response = await axios.get("https://swapi.dev/api/planets/");
      setPlanets(response.data.results);
    };
    getPlanets();
  }, []);

  if (planets.length == 0) {
    return <h3>Loading... Please Wait...</h3>;
  } else {
    return (
      <div className="flex">
        {planets.map((planet) => (
          <div key={planet.name} className="flex-item">
            <h3>{planet.name}</h3>
            <p>Rotation Period: {planet.rotation_period}</p>
            <p>Orbital Period: {planet.orbital_period}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Climate: {planet.climate}</p>
            <Link to={`/planets/${planet.url.match(/\d+/)[0]}`}>
              <button className="details-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default PlanetList;
