import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const StarshipPage = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const getStarshipDetails = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
      setStarship(response.data);
    };
    getStarshipDetails();
  }, [id]);

  if (!starship) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <Link to="/starships">Return to Starship List</Link>
    </div>
  );
};

export default StarshipPage;
