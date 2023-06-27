
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CharacterPage(){


const [character, setCharacter] = useState()

let {id} = useParams()

useEffect(()=>{
  const getCharacter = async() => {
    const response = await axios.get(`https://swapi.dev/api/people/`)
    setCharacter(response.data.results[id])
  }
  getCharacter()
},[])


return character ? (
  <div className="detail">
    <h2>Name: {character.name}</h2>
    <div>Height: {character.height}</div>
    <div>Mass: {character.mass}</div>
    <div>Gender: {character.gender}</div>
    <Link to="/characters"> Return to character list</Link>
  </div>
) : <h3>Finding characters...</h3>
}
