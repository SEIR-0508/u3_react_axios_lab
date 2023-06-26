import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PilotList from "./PilotList";

const StarshipPage = (props) => {
  const [starship, setStarship] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getStarship = async () => {
      let response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
      setStarship(response.data);
    };

    getStarship();
  }, []);

  if (starship.length == 0) {
    return <h3>Loading... Please Wait...</h3>;
  } else {
    return (
      <div className="details-page">
        <h1>{starship.name}</h1>
        <h2>Manufacturer: {starship.manufacturer}</h2>
        <h2>Model: {starship.model}</h2>
        <h4>Cargo Capacity: {starship.cargo_capacity}</h4>
        <h4>Consumables: {starship.consumables}</h4>
        <h4>Cost in Credits: {starship.cost_in_credits}</h4>
        <h4>
          Pilots: <PilotList pilots={starship.pilots} />
        </h4>
        <Link to="/starships">
          <button className="details-btn">Go Back</button>
        </Link>
      </div>
    );
  }
};

export default StarshipPage;
