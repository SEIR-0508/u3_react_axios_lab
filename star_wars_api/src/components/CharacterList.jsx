import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      let response = await axios.get("https://swapi.dev/api/people/");
      setCharacters(response.data.results);
    };
    getCharacters();
  }, []);

  if (characters.length == 0) {
    return <h3>Loading... Please Wait...</h3>;
  } else {
    return (
      <div className="flex">
        {characters.map((character) => (
          <div key={character.name} className="flex-item">
            <h3>{character.name}</h3>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <Link to={`/characters/${character.url.match(/\d+/)[0]}`}>
              <button className="details-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default CharacterList;
