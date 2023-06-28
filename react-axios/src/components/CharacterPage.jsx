import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { character_url } from "../global";
import axios from "axios";

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        axios
          .get(character_url + id)
          .then((response) => {
                setCharacter(response.data);
            })
          .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return character ? (
        <div className="character-details">
            <h2>{character.name}</h2>
            <ul>
                <li><span>Height: </span>{character.height}</li>
                <li><span>Mass: </span>{character.mass}</li>
                <li><span>Hair Color: </span>{character.hair_color}</li>
                <li><span>Skin Color: </span>{character.skin_color}</li>
                <li><span>Eye Color: </span>{character.eye_color}</li>
                <li><span>Birth Year: </span>{character.birth_year}</li>
                <li><span>Gender: </span>{character.gender}</li>
            </ul>
            <div></div>
            <button><Link to="/characters">Return to Character List</Link></button>
        </div>
    ) : <h3>Finding character...</h3>
}

export default CharacterDetails;