import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/planets/");
        setPlanets(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getPlanets();
  }, []);

  const showPlanet = (index) => {
    navigate(`${index}`);
  };

  const handlePlanetHover = (index) => {
    setHoveredPlanet(index);
  };

  const handlePlanetLeave = () => {
    setHoveredPlanet(null);
  };

  const styles = {
    container: {
      maxWidth: "350px",
      margin: "0 auto",
      padding: "8rem",
      borderRadius: "10px",
      backgroundPosition: "center",
      fontFamily: "Zilla Slab Highlight",
      backgroundImage:
        "url(https://i.pinimg.com/originals/c7/e4/26/c7e42606cc03017466e6ae81a130e415.jpg)",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textAlign: "center",
      color: "#FDD545",
      borderRadius: "5px",
    },
    list: {
      listStyle: "none",
      padding: "0",
      margin: "0",
      textAlign: "center",
      borderRadius: "5px",
    },
    listItem: {
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
      transition: "filter 0.3s",
    },
    listItemHovered: {
      fontWeight: "bold",
      transition: "filter 0.3s, transform 0.3s, box-shadow 0.3s",
      boxShadow: "inset 0 -2px 0 0 #FDD545",
    },
    link: {
      color: "#FDD545",
      textDecoration: "none",
    },
    loading: {
      fontSize: "1rem",
      marginBottom: "1rem",
      textAlign: "center",
      color: "#FDD545",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Planets</h1>
      {isLoading ? (
        <p style={styles.loading}>we're orbiting the planets...</p>
      ) : (
        <ul style={styles.list}>
          {planets.map((planet, index) => (
            <li
              key={index}
              style={{
                ...styles.listItem,
                ...(hoveredPlanet === index ? styles.listItemHovered : {}),
              }}
              onMouseEnter={() => handlePlanetHover(index)}
              onMouseLeave={handlePlanetLeave}
              onClick={() => showPlanet(index)}
              className="card"
            >
              <Link
                to={`/planets/${planet.url.split("/").slice(-2, -1)[0]}`}
                style={styles.link}
              >
                {planet.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Planets;
