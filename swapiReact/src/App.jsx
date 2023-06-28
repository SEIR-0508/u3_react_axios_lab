import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import FilmsPage from "./Components/FilmsPage";
import Home from "./Components/Home";
import StarshipList from "./Components/StarshipList";
import PlanetsList from "./Components/Planets";
import Characters from "./Components/Characters";
import ShipDetails from "./Components/ShipDetails";
import PlanetPage from "./Components/PlanetPage";
import Films from "./Components/Films";
import CharactersDetail from "./Components/CharactersDetail";

const App = () => {
  const navStyle = {
    backgroundColor: "transparent",
    padding: "1rem",
    textAlign: "center",
    fontFamily: "Faster One",
  };

  const linkStyle = {
    color: "white",
    margin: "0 1rem",
    textDecoration: "none",
    fontSize: "2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const hoverLinkStyle = {
    color: "#FDD545",
  };

  return (
    <Router>
      <nav style={navStyle}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
          }}
        >
          <li>
            <Link
              to="/"
              style={linkStyle}
              activeStyle={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = hoverLinkStyle.color)
              }
              onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/starships"
              style={linkStyle}
              activeStyle={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = hoverLinkStyle.color)
              }
              onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
            >
              Starships
            </Link>
          </li>
          <li>
            <Link
              to="/films"
              style={linkStyle}
              activeStyle={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = hoverLinkStyle.color)
              }
              onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
            >
              Films
            </Link>
          </li>
          <li>
            <Link
              to="/planets"
              style={linkStyle}
              activeStyle={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = hoverLinkStyle.color)
              }
              onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
            >
              Planets
            </Link>
          </li>
          <li>
            <Link
              to="/characters"
              style={linkStyle}
              activeStyle={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.color = hoverLinkStyle.color)
              }
              onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
            >
              Characters
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/films" element={<Films />} />
        <Route path="/planets" element={<PlanetsList />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/starships/:id" element={<ShipDetails />} />
        <Route path="/planets/:id" element={<PlanetPage />} />
        <Route path="/films/:id" element={<FilmsPage />} />
        <Route path="/characters/:id" element={<CharactersDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
