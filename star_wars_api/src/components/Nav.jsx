import { Router, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/starships">STARSHIPS</Link>
        </li>
        <li>
          <Link to="/films">FILMS</Link>
        </li>
        <li>
          <Link to="/planets">PLANETS</Link>
        </li>
        <li>
          <Link to="/characters">CHARACTERS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
