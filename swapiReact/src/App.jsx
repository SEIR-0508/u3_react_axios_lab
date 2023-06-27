import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import FilmsList from './Components/Films';
import Home from './Components/Home';
import StarshipList from './Components/StarshipList';
import PlanetsList from './Components/Planets';
import Characters from './Components/Characters';

const App = () => {
  const navStyle = {
    backgroundColor: 'transparent',
    padding: '1rem',
    textAlign: 'center',
    fontFamily: 'Faster One',
  };

  const linkStyle = {
    color: 'white',
    margin: '0 1rem',
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'color 0.3s',
  };

  const activeLinkStyle = {
    color: '#61dafb',
  };

  return (
    <Router>
      <nav style={navStyle}>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
          <li>
            <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/starships" style={linkStyle} activeStyle={activeLinkStyle}>Starships</Link>
          </li>
          <li>
            <Link to="/films" style={linkStyle} activeStyle={activeLinkStyle}>Films</Link>
          </li>
          <li>
            <Link to="/planets" style={linkStyle} activeStyle={activeLinkStyle}>Planets</Link>
          </li>
          <li>
            <Link to="/characters" style={linkStyle} activeStyle={activeLinkStyle}>Characters</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/films" element={<FilmsList />} />
        <Route path="/planets" element={<PlanetsList />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
};

export default App;
