import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching characters:', error);
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const charactersContainerStyle = {
    maxWidth: "350px",
    margin: "0 auto",
    padding: "8rem",
    borderRadius: "10px",
    backgroundPosition: "center",
    fontFamily: "Zilla Slab Highlight",
    backgroundImage:
      'url(https://hips.hearstapps.com/hmg-prod/images/star-wars-characters-ranked-1577122930.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*)',
    backgroundRepeat: 'no-repeat',
  };

  const charactersTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#FDD545',
    textDecoration: 'none',
  };

  const characterItemStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '1rem 0',
    textAlign: 'center',
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',
    cursor: 'pointer',
    fontSize: '1.1rem',
  };
  

  const characterItemHoverStyle = {
    fontWeight: "bold",
      transition: 'filter 0.3s, transform 0.3s, box-shadow 0.3s',
      boxShadow: 'inset 0 -2px 0 0 #FDD545',
  };

  const loadingStyle = {
    fontSize: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#FDD545',
    textDecoration: 'none',
  };

  return (
    <div style={charactersContainerStyle}>
      <h2 style={charactersTitleStyle}>Characters</h2>
      {isLoading ? (
        <p style={loadingStyle}>Gathering the intergalactic squad....</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li
              key={character.name}
              style={{
                ...characterItemStyle,
                ...(hoveredCharacter === character.name && characterItemHoverStyle),
              }}
              onMouseEnter={() => setHoveredCharacter(character.name)}
              onMouseLeave={() => setHoveredCharacter(null)}
            >
              <Link
                to={`/characters/${character.url.split('/').slice(-2, -1)}`}
                className="link-no-decoration"
              >
                {character.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Characters;
