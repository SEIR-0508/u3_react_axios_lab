import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div>
      <h2>List of Films</h2>
      {films.map((film) => (
        <div key={film.title}>
          <h3>{film.title}</h3>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
        </div>
      ))}
    </div>
  );
};

export default Films;
