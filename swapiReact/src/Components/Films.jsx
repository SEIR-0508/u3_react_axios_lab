import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredFilm, setHoveredFilm] = useState(null);

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
    color: '#FDD545',
  };

  const filmItemStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  };

  const filmItemHoverStyle = {
    fontWeight: "bold",
      transition: 'filter 0.3s, transform 0.3s, box-shadow 0.3s',
      boxShadow: 'inset 0 -2px 0 0 black'
  };

  const filmLinkStyle = {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#FDD545',
    textDecoration: 'none',
  };

  const handleFilmHover = (index) => {
    setHoveredFilm(index);
  };

  const handleFilmLeave = () => {
    setHoveredFilm(null);
  };

  return (
    <div style={filmsContainerStyle}>
      <h2 style={filmsTitleStyle}>Films</h2>
      {isLoading ? (
        <p style={loadingStyle}>The Force is still awakening...</p>
      ) : (
        <ul>
          {films.map((film, index) => (
            <li
              key={film.episode_id}
              style={{
                ...filmItemStyle,
                ...(hoveredFilm === index ? filmItemHoverStyle : {}),
              }}
              onMouseEnter={() => handleFilmHover(index)}
              onMouseLeave={handleFilmLeave}
            >
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
