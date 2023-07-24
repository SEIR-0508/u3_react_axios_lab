import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StarshipsList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get('https://swapi.dev/api/starships/');
      setStarships(response.data.results);
    };
    getStarships();
  }, []);

  return (
    <div className="starship">
      <h2>List of Starships</h2>
      {starships.map((starship) => (
        <div key={starship.name} className="card">
          <Link to={`/starships/${starship.url.split('/')[5]}`}>
            <h3>{starship.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default StarshipsList;
