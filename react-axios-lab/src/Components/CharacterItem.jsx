import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Nav from './Nav'

export default function CharacterDetails(){

const [character, setCharacter] = useState()
let {id} = useParams()

useEffect(()=>{
  const getCharacter = async() => {
    const response = await axios.get(`https://swapi.dev/api/people/`)
    setCharacter(response.data.results[id])
  }
  getCharacter()
}, [])


return character ? (
  <div className="detail">
    <Nav />
      <Link to="/characters" className="details-back-button"> Return to Characters</Link>
    <div className="data-container">
      <h2 className='starship-item-title'>{character.name}</h2>
      <hr />
      <div className="data-grid">
        <h3 className="data-title">Height:</h3>
        <p className="data-info">{character.height}cm</p>
        <h3 className="data-title">Mass:</h3>
        <p className="data-info">{character.mass}kg</p>
        <h3 className="data-title">Hair Color:</h3>
        <p className="data-info">{character.hair_color}</p>
        <h3 className="data-title">Skin Color:</h3>
        <p className="data-info">{character.skin_color}</p>
        <h3 className="data-title">Eye Color:</h3>
        <p className="data-info">{character.eye_color}</p>
        <h3 className="data-title">Birth Year:</h3>
        <p className="data-info">{character.birth_year}</p>
        <h3 className="data-title">Gender:</h3>
        <p className="data-info">{character.gender}</p>
      </div>
    </div>
  </div>
) : <h3 className='loading'>Finding data...</h3>
}