import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredStarship, setHoveredStarship] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getStarships = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/");
        setStarships(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getStarships();
  }, []);

  const showShip = (index) => {
    navigate(`${index}`);
  };

  const handleStarshipHover = (index) => {
    setHoveredStarship(index);
  };

  const handleStarshipLeave = () => {
    setHoveredStarship(null);
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
        "url(https://i.ytimg.com/vi/D8mouRxJsQI/maxresdefault.jpg)",
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
      transition: 'filter 0.3s, transform 0.3s, box-shadow 0.3s',
      boxShadow: 'inset 0 -2px 0 0 #FDD545'
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
      <h1 style={styles.heading}>Starships</h1>
      {isLoading ? (
        <p style={styles.loading}>
          Hold on tight, we're arming the starships...
        </p>
      ) : (
        <ul style={styles.list}>
          {starships.map((starship, index) => (
            <li
              key={index}
              style={{
                ...styles.listItem,
                ...(hoveredStarship === index ? styles.listItemHovered : {}),
              }}
              onMouseEnter={() => handleStarshipHover(index)}
              onMouseLeave={handleStarshipLeave}
              onClick={() => showShip(index)}
              className="card"
            >
              <Link
                to={`/starships/${starship.name.replace("-", "")}`}
                style={styles.link}
                activestyle={styles.link} 
                hoverstyle={styles.link}  
              >
                {starship.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StarshipList;
