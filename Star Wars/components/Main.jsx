import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StarshipsList from './StarshipList';
import StarshipPage from './StarshipPage';
import Planets from './Planets';
import Vehicles from './Vehicles';
import Films from './Films';
import People from './People';

const Main = () => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/starships" element={<StarshipsList />} />
        <Route path="/starships/:id" element={<StarshipPage />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/films" element={<Films />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </main>
  );
};

export default Main;
