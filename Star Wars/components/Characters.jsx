import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>List of Characters</h2>
      {characters.map((character) => (
        <div key={character.name}>
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Characters;
