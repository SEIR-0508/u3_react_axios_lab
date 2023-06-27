
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function StarshipPage(){

//setting up the individiual starship in state
const [starship, setStarship] = useState()
//setting up the param to pull to be the ship's ID
let {id} = useParams()

useEffect(()=>{
  const getStarship = async() => {
    const response = await axios.get(`https://swapi.dev/api/starships/`)
    setStarship(response.data.results[id])
  }
  getStarship()
},[])


return starship ? (
  <div className="detail">
    <h2>Name: {starship.name}</h2>
    <div>Model: {starship.model}</div>
    <div>Manufactrurer: {starship.manufacturer}</div>
    <div>Length: {starship.length}</div>
    <div>Crew: {starship.crew}</div>
    <div>Passengers: {starship.passengers}</div>
    <div>Cost in credits: {starship.cost_in_credits}</div>
    <Link to="/starships"> Return to starship list</Link>
  </div>
) : <h3>Finding starships...</h3>
}
