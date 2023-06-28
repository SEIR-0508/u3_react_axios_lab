import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  const [characterId, setCharacterId] = useState("");
  const [character, setCharacter] = useState(null);
  console.log(props)
  const { id } = useParams();
  useEffect(() => {
    setCharacterId(id);

    const selectedCharacter = props.characters.find(
      (character) => character.name === id
    );
    setCharacter(selectedCharacter);
  }, []);

  const BackToCharacters = () => {
    return (
      <Link to="/characters" className="back-button">
        Back
      </Link>
    );
  };

  return (
    <div>
      <div className="back">
        <BackToCharacters />
      </div>
      <div className="gallery">
        <h1>Character Details</h1>
        {character ? (
          <div className="card hidden">
            <h2>{character.name}</h2>
            <ul>
              <li>DOB: {character.birth_year}</li>
              <li>Eye Color: {character.eye_color}</li>
              <li>Skin Color: {character.skin_color}</li>
              <li>Height: {character.height} cm</li>
              <li>Mass: {character.mass} kg</li>
              <li>Gender: {character.gender}</li>
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CharacterDetails;
