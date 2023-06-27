import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
        setIsLoading(false);
      } catch (error) {
        
        setIsLoading(false);
      }
    };

    fetchFilms();
  }, []);

  const filmsContainerStyle = {
    maxWidth: '350px',
    margin: '0 auto',
    padding: '8rem',
    borderRadius: '10px',
    backgroundPosition: 'center',
    fontFamily: 'Zilla Slab Highlight',
    backgroundImage: 'url(https://i.pinimg.com/736x/77/92/83/7792835779253d8e5a5719b7d902ef72--graphic-posters-film-posters.jpg)',
  };

  const filmsTitleStyle = {
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

  const filmItemStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    textAlign: 'center',
  };

  const filmLinkStyle = {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#FDD545',
  };

  return (
    <div style={filmsContainerStyle}>
      <h2 style={filmsTitleStyle}>Films</h2>
      {isLoading ? (
        <p style={loadingStyle}>The Force is still awakening...</p>
      ) : (
        <ul>
          {films.map((film) => (
            <li key={film.episode_id} style={filmItemStyle}>
              <Link to={`/films/${film.episode_id}`} style={filmLinkStyle}>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Films;
