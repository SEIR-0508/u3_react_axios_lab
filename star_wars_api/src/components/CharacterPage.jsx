import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharacterPage = (props) => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      let response = await axios.get(`https://swapi.dev/api/people/${id}/`);
      setCharacter(response.data);
    };

    getCharacter();
  }, []);

  if (character.length == 0) {
    return <h3>Loading... Please Wait...</h3>;
  } else {
    return (
      <div className="details-page">
        <h1>{character.name}</h1>
        <h4>Height: {character.height}</h4>
        <h4>Mass: {character.mass}</h4>
        <h4>Hair Color: {character.hair_color}</h4>
        <h4>Skin Color: {character.skin_color}</h4>
        <h4>Eye Color: {character.eye_color}</h4>
        <h4>Birth Year: {character.birth_year}</h4>
        <h4>Gender: {character.gender}</h4>
        <Link to="/characters">
          <button className="details-btn">Go Back</button>
        </Link>
      </div>
    );
  }
};

export default CharacterPage;
