import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ShipDetails() {

  //setting up the individiual starship in state
  const [starship, setStarship] = useState()
  //setting up the param to pull to be the ship's ID
  console.log(useParams())
  let { id } = useParams()

  useEffect(() => {
    const getStarship = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/${id}`)
      console.log(response)
      setStarship(response.data)
    }
    getStarship()
  }, [])

  return starship ? (
    <div className="detail">
      <h2>Starship: {starship.name}</h2>
      <ul>
        <li><span>Manufacturer:</span> {starship.manufacturer}</li>
        <li><span>Cost in Credits:</span> {starship.cost_in_credits}</li>
        <li><span>Length:</span> {starship.length}</li>
        <li><span>Max Speed:</span> {starship.max_atmosphering_speed}</li>
        <li><span>Crew:</span> {starship.crew}</li>
        <li><span>Passengers:</span> {starship.passengers}</li>
        <li><span>Cargo Capacity:</span> {starship.cargo_capacity}</li>
        <li><span>Consumables:</span> {starship.consumables}</li>
        <li><span>Hyperdrive Rating:</span> {starship.hyperdrive_rating}</li>
      </ul>
      <button><Link to="/starships"> Return to starship list</Link></button>
    </div>
  ) : <h3>Finding starship...</h3>
}
