import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Nav from './Nav'

export default function PlanetDetails(){

const [planet, setPlanet] = useState()
let {id} = useParams()

useEffect(()=>{
  const getPlanet = async() => {
    const response = await axios.get(`https://swapi.dev/api/planets/`)
    setPlanet(response.data.results[id])
  }
  getPlanet()
}, [])


return planet ? (
  <div className="detail">
    <Nav />
      <Link to="/planets" className="details-back-button"> Return to Planets</Link>
    <div className="data-container">
      <h2 className='starship-item-title'>{planet.name}</h2>
      <hr />
      <div className="data-grid">
        <h3 className="data-title">Rotation Period:</h3>
        <p className="data-info">{planet.rotation_period} Days</p>
        <h3 className="data-title">Orbital Period:</h3>
        <p className="data-info">{planet.orbital_period} Days</p>
        <h3 className="data-title">Diameter:</h3>
        <p className="data-info">{planet.diameter}km</p>
        <h3 className="data-title">Climate:</h3>
        <p className="data-info">{planet.climate}</p>
        <h3 className="data-title">Gravity</h3>
        <p className="data-info">{planet.gravity}</p>
        <h3 className="data-title">Terrain:</h3>
        <p className="data-info">{planet.terrain}</p>
        <h3 className="data-title">Surface Water:</h3>
        <p className="data-info">{planet.surface_water}</p>
        <h3 className="data-title">Population:</h3>
        <p className="data-info">{planet.population}</p>
      </div>
    </div>
  </div>
) : <h3 className='loading'>Finding data...</h3>
}