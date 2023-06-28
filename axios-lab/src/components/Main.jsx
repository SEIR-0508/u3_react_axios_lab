import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import StarshipList from "./StarshipList";
import FilmsList from "./FilmsList";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/StarshipList" element={<StarshipList />} />
      <Route path="/FilmsList" element={<FilmsList />} />
      {/* <Route path="/PlanetsList" element={<PlantsList />} />;
      <Route path="/CharactersList" element={<CharactersList />} />; */}
    </Routes>
  );
};

export default Main;
