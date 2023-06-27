import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Nav from './Nav'

export default function ShipDetails(){

const [starship, setStarship] = useState()
let {id} = useParams()

useEffect(()=>{
  const getStarship = async() => {
    const response = await axios.get(`https://swapi.dev/api/starships/`)
    setStarship(response.data.results[id])
  }
  getStarship()
}, [])


return starship ? (
  <div className="detail">
    <Nav />
      <Link to="/starships" className="details-back-button"> Return to Starships</Link>
    <div className="data-container">
      <h2 className='starship-item-title'>{starship.name}</h2>
      <hr />
      <div className="data-grid">
        <h3 className="data-title">Model:</h3>
        <p className="data-info">{starship.model}</p>
        <h3 className="data-title">Manufacturer:</h3>
        <p className="data-info">{starship.manufacturer}</p>
        <h3 className="data-title">Cost:</h3>
        <p className="data-info">{starship.cost_in_credits} Republic Credits</p>
        <h3 className="data-title">Length:</h3>
        <p className="data-info">{starship.length}</p>
        <h3 className="data-title">Max Atmosphere Speed:</h3>
        <p className="data-info">{starship.max_atmosphering_speed}</p>
        <h3 className="data-title">Crew:</h3>
        <p className="data-info">{starship.crew}</p>
        <h3 className="data-title">Passengers:</h3>
        <p className="data-info">{starship.passengers}</p>
        <h3 className="data-title">Cargo Capacity:</h3>
        <p className="data-info">{starship.cargo_capacity}</p>
        <h3 className="data-title">Consumables:</h3>
        <p className="data-info">{starship.consumables}</p>
        <h3 className="data-title">Hyperdrive Rating:</h3>
        <p className="data-info">{starship.hyperdrive_rating}</p>
        <h3 className="data-title">Starship Class:</h3>
        <p className="data-info">{starship.starship_class}</p>
      </div>
    </div>
  </div>
) : <h3 className='loading'>Finding data...</h3>
}