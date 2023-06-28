import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex">
      <Link to="./">Home</Link>
      <Link to="./StarshipList">Starship</Link>
      <Link to="./FilmsList">Films</Link>
      {/* <Link to="./PlantsList">Plants</Link>
      <Link to="./CharacterList">Characters</Link> */}
    </div>
  );
};

export default Nav;
