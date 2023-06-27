
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PlanetPage(){


const [planet, setPlanet] = useState()

let {id} = useParams()

useEffect(()=>{
  const getPlanet = async() => {
    const response = await axios.get(`https://swapi.dev/api/planets/`)
    setPlanet(response.data.results[id])
  }
  getPlanet()
},[])


return planet ? (
  <div className="detail">
    <h2>Name: {planet.name}</h2>
    <div>Diameter: {planet.diameter}</div>
    <div>Climate: {planet.climate}</div>
    <div>Terrain: {planet.terrain}</div>
    <div>Population: {planet.population}</div>
    <Link to="/planets"> Return to planet list</Link>
  </div>
) : <h3>Finding planets...</h3>
}
