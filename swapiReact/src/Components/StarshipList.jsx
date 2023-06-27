import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships');
        setStarships(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchStarships();
  }, []);

  const styles = {
    container: {
      maxWidth: '350px',
      margin: '0 auto',
      padding: '8rem',
      borderRadius: '10px',
      backgroundPosition: 'center',
      fontFamily: 'Zilla Slab Highlight',
      backgroundImage: 'url(https://i.ytimg.com/vi/D8mouRxJsQI/maxresdefault.jpg)',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textAlign: 'center',
      color: '#FDD545',
      borderRadius: '5px',
    },
    list: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
      textAlign: 'center',
      borderRadius: '5px',
    },
    listItem: {
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
      color: '#FDD545',
    },
    loading: {
      fontSize: '1rem',
      marginBottom: '1rem',
      textAlign: 'center',
      color: '#FDD545',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Starships</h1>
      {isLoading ? (
        <p style={styles.loading}>Hold on tight, we're beaming up starships...</p>
      ) : (
        <ul style={styles.list}>
          {starships.map((starship) => (
            <li key={starship.name} style={styles.listItem}>
              {starship.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StarshipList;
