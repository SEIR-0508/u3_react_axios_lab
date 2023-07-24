import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/vehicles/');
        setVehicles(response.data.results);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div>
      <h2>List of Vehicles</h2>
      {vehicles.map((vehicle) => (
        <div key={vehicle.name}>
          <h3>{vehicle.name}</h3>
          <p>Model: {vehicle.model}</p>
          <p>Manufacturer: {vehicle.manufacturer}</p>
        </div>
      ))}
    </div>
  );
};

export default Vehicles;
