import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const FilmDetails = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
        setFilm(response.data);
      } catch (error) {
        console.log('Error fetching film:', error);
      }
    };

    fetchFilm();
  }, [id]); 

  const styles = {
    container: {
      maxWidth: "350px",
      margin: "0 auto",
      padding: "8rem",
      borderRadius: "10px",
      backgroundPosition: "center",
      fontFamily: "Zilla Slab Highlight",
      backgroundImage: 'url(https://i.pinimg.com/736x/77/92/83/7792835779253d8e5a5719b7d902ef72--graphic-posters-film-posters.jpg)',
        color: "#FDD545",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textAlign: "center",
       
      borderRadius: "5px",
    },
    details: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
    },
    link: {
      display: 'block',
      marginTop: '1rem',
      color: "#FDD545",
      textDecoration: 'none',
      fontSize: '1.2rem',
    },
  };

  return (
    <div style={styles.container}>
      {film ? (
        <div>
          <h2 style={styles.heading}>{film.title}</h2>
          <p style={styles.details}>Episode: {film.episode_id}</p>
          <p style={styles.details}>Director: {film.director}</p>
          <p style={styles.details}>Producer: {film.producer}</p>
          <p style={styles.details}>Release Date: {film.release_date}</p>
          <p style={styles.details}>Opening Crawl:</p>
          <p>{film.opening_crawl}</p>
          <Link to="/films" style={styles.link}>Return to Films</Link>
        </div>
      ) : (
        <h3>Loading film details...</h3>
      )}
    </div>
  );
};

export default FilmDetails;
