import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Planets = (props) => {
  
  let navigate = useNavigate()
    
  const showPlanet = (planet) => {
    navigate(`${planet.name}`)  
  }

  const BackHome = () => {
    return (
      <Link to="/" className="back-button">
        Back
      </Link>
    )
  }

  return (
    <div>
      <div className="back">
            <BackHome />
        </div>
      <div className="gallery">
        {
          props.planets.map((planet) => (
            <div key={planet.name} onClick={() => showPlanet(planet)} className="card">
                <h2>{planet.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Planets