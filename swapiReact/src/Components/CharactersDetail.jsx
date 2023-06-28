import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const CharactersDetail = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        const characterData = response.data;
        setCharacter(characterData);
      } catch (error) {
        console.log('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  const styles = {
    container: {
      maxWidth: '350px',
      margin: '0 auto',
      padding: '8rem',
      borderRadius: '10px',
      backgroundPosition: 'center',
      fontFamily: 'Zilla Slab Highlight',
      backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod/images/star-wars-characters-ranked-1577122930.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*)',
            color: '#FDD545',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textAlign: 'center',
      color: '#FDD545',
      borderRadius: '5px',
    },
    details: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
    },
    link: {
      display: 'block',
      textAlign: 'center',
      marginTop: '1rem',
      color: '#FDD545',
      textDecoration: 'none',
      fontSize: '1.2rem',
    },
  };

  return (
    <div style={styles.container}>
      {character ? (
        <div>
          <h2 style={styles.heading}>{character.name}</h2>
          <p style={styles.details}>Height: {character.height}</p>
          <p style={styles.details}>Mass: {character.mass}</p>
          <p style={styles.details}>Hair Color: {character.hair_color}</p>
          <p style={styles.details}>Skin Color: {character.skin_color}</p>
          <p style={styles.details}>Eye Color: {character.eye_color}</p>
          <p style={styles.details}>Birth Year: {character.birth_year}</p>
          <p style={styles.details}>Gender: {character.gender}</p>

          <Link to="/characters" style={styles.link}>Return to Character List</Link>
        </div>
      ) : (
        <h3>Finding character...</h3>
      )}
    </div>
  );
};

export default CharactersDetail;
