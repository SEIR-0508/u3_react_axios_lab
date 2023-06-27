import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanets(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching planets:', error);
        setIsLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  const planetsContainerStyle = {
    maxWidth: '350px',
    margin: '0 auto',
    padding: '8rem',
    borderRadius:'10px',
   backgroundPosition:'center',
   fontFamily: 'Zilla Slab Highlight', 
    backgroundImage:'url(https://i.pinimg.com/originals/c7/e4/26/c7e42606cc03017466e6ae81a130e415.jpg)',
  };

  const planetsTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#FDD545',
  };

  const loadingStyle = {
    
    fontSize: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#FDD545'
  };

  const planetItemStyle = {
    listStyle:'none',
    fontSize: '1.5rem',
      marginBottom: '0.5rem',
      color: '#FDD545',
  };

  return (
    <div style={planetsContainerStyle}>
      <h1 style={planetsTitleStyle}>Planets</h1>
      {isLoading ? (
        <p style={loadingStyle}>we're orbiting the planets...</p>
      ) : (
        <ul>
          {planets.map((planet) => (
            <li key={planet.name} style={planetItemStyle}>{planet.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Planets;
