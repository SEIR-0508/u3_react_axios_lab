import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../globals";

const StarshipList = () => {
  const [starships, setStarships] = useState(null);
  // const response = null;

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}starships`);

      setStarships(response.data.results);
      console.log(response);
    };
    getStarships();
  }, []);

  let navigate = useNavigate();
  const showGameDetails = (name) => {
    navigate(`${name}`);
  };

  let arr = ["films", "created", "edited", "url"];
  let blank = "";
  //if (!starships) return <h1> Loading...</h1>
  return starships ? (
    <div className="grid">
      {starships.map((starship) => (
        <div
          key={starship.name}
          className="starships"
          onClick={() => showStarShipDetails(starship.name)}
        >
          {Object.keys(starship)
            .slice(0, 12)
            .map((value) => (
              <h3 key={value}>
                {!arr.includes(value) ? starship[value] : null}
              </h3>
            ))}
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default StarshipList;
