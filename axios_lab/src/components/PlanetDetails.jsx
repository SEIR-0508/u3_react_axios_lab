import { useEffect, useState } from "react";
import { useParams, useLocation} from "react-router-dom";




export default function ShipPlanets(props) {

let {id} = useParams()
let location = useLocation()
let planet = location.state.planet
console.log(planet)

  return planet ? (
    <div className="card">
      <h2>Name: {planet.name}</h2>
      <p>Rotation period : {planet.rotation_period}</p>
      <p>Surface water : {planet.surface_water}</p>
      <p>Population : {planet.population}</p>
    </div>
  ) : (
    <h3>Loading Planets...</h3>
  );
}