import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../globals";

const StarshipList = () => {
  let navigate = useNavigate();

  const [ships, setShips] = useState([]);

  useEffect(() => {
    const getShips = async () => {
      const response = await axios.get(`${BASE_URL}starships`);
      setShips(response.data.results);
      console.log(response.data.results);
    };

    getShips();
  }, []);

  //**************? */
  const showShip = (key) => {
    navigate(`${key}`);
  };

  return (
    <div className="starship">
      <h1>Starship List</h1>
      <ul>
        {ships.map((ship, index) => (
          <li key={index}>{ship.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StarshipList;
