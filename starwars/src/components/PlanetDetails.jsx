import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const PlanetDetails = (props) => {
  const [planetId, setPlanetId] = useState("")
  const [planet, setPlanet] = useState(null)
  
  const { id } = useParams()
  useEffect(() => {
    setPlanetId(id);
    
    const selectedPlanet = props.planets.find((planet) => planet.name === id);
    setPlanet(selectedPlanet)
    console.log(selectedPlanet)
  }, [])

  const BackToPlanets = () => {
    return (
          <Link to="/planets" className="back-button">
                Back
          </Link>
    )
  }

  return (
    <div>
      <div className="back">
                  <BackToPlanets />
            </div>
            <div className="gallery">
                  <h1>Planet Details</h1>
                  {planet ? (
                  <div className="card hidden">
                        <h2>{planet.name}</h2>
                        <ul>
                              <li>Diameter: {planet.diameter}</li>
                              <li>Climate: {planet.climate}</li>
                              <li>Gravity: {planet.gravity}</li>
                              <li>Orbital Period: {planet.orbital_period} days</li>
                              <li>Rotation Period: {planet.rotation_period} days</li>
                              <li>Terrain: {planet.terrain}</li>
                        </ul>
                  </div>
                  ) : (
                  <p>Loading...</p>
                  )}
          </div>
    </div>
  )
}

export default PlanetDetails