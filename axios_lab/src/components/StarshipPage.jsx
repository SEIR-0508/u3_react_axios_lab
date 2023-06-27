import { useEffect, useState } from "react";
import { useParams, useLocation, Link} from "react-router-dom";




export default function ShipDetails(props) {


let {id} = useParams()
let location = useLocation()
let starship = location.state.ship
console.log(starship)

  return starship ? (
    <div className="card">
      <h2>Name: {starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manfacturer: {starship.manufacturer}</p>
      <p>{starship.passengers}</p>
      <p>Length: {starship.length} Meters</p>
                       
      <Link to="/starship"> Return to Starship list</Link>
    </div>
  ) : (
    <h3>Loading starship...</h3>
  );
  
}