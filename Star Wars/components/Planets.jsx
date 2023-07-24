import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanets(response.data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div>
      <h2>List of Planets</h2>
      {planets.map((planet) => (
        <div key={planet.name}>
          <h3>{planet.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Planets;
