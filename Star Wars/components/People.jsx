import React, { useState, useEffect } from 'react';
import axios from 'axios';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setPeople(response.data.results);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h2>List of People</h2>
      {people.map((person) => (
        <div key={person.name}>
          <h3>{person.name}</h3>
          <p>Birth Year: {person.birth_year}</p>
          <p>Gender: {person.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default People;
