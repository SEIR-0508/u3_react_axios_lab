import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import StarshipList from './StarshipList';
import FilmsList from './FilmsList';
import PlanetsList from './PlanetsList';
import CharactersList from './CharactersList';

const Main = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/films" element={<FilmsList />} />
        <Route path="/planets" element={<PlanetsList />} />
        <Route path="/characters" element={<CharactersList />} />
      </Routes>
    </main>
  );
};

export default Main;
