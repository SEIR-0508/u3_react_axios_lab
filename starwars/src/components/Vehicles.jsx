import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Vehicles = (props) => {
  let navigate = useNavigate()
  const showVehicle = (vehicle) => {
    navigate(`${vehicle.name}`)  
  }

  const BackButton = () => {
    return (
      <Link to="/" className="back-button">
        Back
      </Link>
    )
  }

  return (
    <div>
      <div className="back">
        <BackButton />
      </div>
      <div className="gallery">
        {
          props.vehicles.map((vehicle) => (
            <div key={vehicle.name} onClick={() => showVehicle(vehicle)} className="card">
              <h2>{vehicle.name}</h2>
              <p>Length: {vehicle.length}</p>
              <p>Cost in Credits: ${vehicle.cost_in_credits}</p>
              <p>Model: {vehicle.model}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Vehicles