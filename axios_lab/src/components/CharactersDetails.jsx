import { useEffect, useState } from "react";
import { useParams, useLocation, Link} from "react-router-dom";





export default function CharacterDetails(props) {


let {id} = useParams()
let location = useLocation()
let character = location.state.character
console.log(character)

  return character ? (
    <div className="card">
      <h2>Name: {character.name}</h2>
      <p>Height : {character.height}</p>
      <p>Mass : {character.mass}</p>

      <Link to="/Characters"> Return to starship list</Link>
    </div>
  ) : (
    <h3>Loading Characters...</h3>
  );
  
}