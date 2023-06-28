import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ShipDetails = () => {
  const [starship, setStarship] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/?search=${id}`);
        const starshipData = response.data.results[0];
        setStarship(starshipData);
      } catch (error) {
        console.log('Error fetching starship:', error);
      }
    };

    fetchStarship();
  }, [id]);

  const styles = {
    container: {
      maxWidth: '350px',
      margin: '0 auto',
      padding: '8rem',
      borderRadius: '10px',
      backgroundPosition: 'center',
      fontFamily: 'Zilla Slab Highlight',
      backgroundImage: 'url(https://i.ytimg.com/vi/D8mouRxJsQI/maxresdefault.jpg)',
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
      {starship ? (
        <div>
          <h2 style={styles.heading}>{starship.name}</h2>
          <p style={styles.details}>Model: {starship.model}</p>
          <p style={styles.details}>Manufacturer: {starship.manufacturer}</p>
          <p style={styles.details}>Cost in Credits: {starship.cost_in_credits}</p>
          <p style={styles.details}>Length: {starship.length}</p>
          <p style={styles.details}>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
          <p style={styles.details}>Crew: {starship.crew}</p>
          <p style={styles.details}>Passengers: {starship.passengers}</p>
          <p style={styles.details}>Cargo Capacity: {starship.cargo_capacity}</p>
          <p style={styles.details}>Consumables: {starship.consumables}</p>
          <p style={styles.details}>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
          <p style={styles.details}>MGLT: {starship.MGLT}</p>
          <p style={styles.details}>Starship Class: {starship.starship_class}</p>
           
          <Link to="/starships" style={styles.link}>Return to Starship List</Link>
        </div>
      ) : (
        <h3>Lets Check Out Your Ship..</h3>
      )}
    </div>
  );
};

export default ShipDetails;
