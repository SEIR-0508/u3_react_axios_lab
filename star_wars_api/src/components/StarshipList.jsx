import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      let response = await axios.get("https://swapi.dev/api/starships");
      setStarships(response.data.results);
    };
    getStarships();
  }, []);

  if (starships.length == 0) {
    return <h3>Loading... Please Wait...</h3>;
  } else {
    return (
      <div className="flex">
        {starships.map((starship) => (
          <div key={starship.name} className="flex-item">
            <h3>{starship.name}</h3>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Length: {starship.length}</p>
            <p>Crew: {starship.crew}</p>
            <p>Passengers: {starship.passengers}</p>
            <p>Cargo Capacity: {starship.cargo_capacity}</p>
            <Link to={`/starships/${starship.url.match(/\d+/)[0]}`}>
              <button className="details-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default StarshipList;
