import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PlanetPage = () => {
  const [planet, setPlanet] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const getPlanet = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/`);
        setPlanet(response.data.results[id]);
      } catch (error) {
        console.log(error);
      }
    };

    getPlanet();
  }, [id]);

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
        color: "#FDD545",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textAlign: "center",
       
      borderRadius: "5px",
    },
    planetDetails: {
      listStyle: "none",
      padding: "0",
      margin: "0",
      textAlign: "center",
      borderRadius: "5px",
    },
    planetItem: {
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
    },
    link: {
      color: "#FDD545",
      textDecoration: "none",
    },
  };

  return planet ? (
    <div style={styles.container}>
      <h2 style={styles.heading}>{planet.name}</h2>
      <ul style={styles.planetDetails}>
        <li style={styles.planetItem}>Rotation Period: {planet.rotation_period}</li>
        <li style={styles.planetItem}>Orbital Period: {planet.orbital_period}</li>
        <li style={styles.planetItem}>Diameter: {planet.diameter}</li>
        <li style={styles.planetItem}>Climate: {planet.climate}</li>
        <li style={styles.planetItem}>Gravity: {planet.gravity}</li>
        <li style={styles.planetItem}>Terrain: {planet.terrain}</li>
        <li style={styles.planetItem}>Surface Water: {planet.surface_water}</li>
        <li style={styles.planetItem}>Population: {planet.population}</li>
      </ul>
      <Link to="/planets" style={styles.link}>Return to Planet List</Link>
    </div>
  ) : (
    <h3>Finding planet...</h3>
  );
};

export default PlanetPage;
