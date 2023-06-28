import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const VehicleDetails = (props) => {

  const [vehicleId, setVehicleId] = useState("")
  const [vehicle, setVehicle] = useState(null)
  
  const { id } = useParams()
  useEffect(() => {
        setVehicleId(id);
        
        const selectedVehicle = props.vehicles.find((vehicle) => vehicle.name === id);
        setVehicle(selectedVehicle)
  }, [])

  const BackToVehicles = () => {
        return (
              <Link to="/vehicles" className="back-button">
                    Back
              </Link>
        )
  }


  return (
    <div>
      <div className="back">
            <BackToVehicles />
      </div>
      <div className="gallery">
            <h1>Vehicle Details</h1>
            {vehicle ? (
            <div className="card hidden">
                  <h2>{vehicle.name}</h2>
                  <ul>
                        <li>Length: {vehicle.length}</li>
                        <li>Capacity: {vehicle.cargo_capacity}</li>
                        <li>Cost:{vehicle.cost_in_credits}</li>
                        <li>Model: {vehicle.model}</li>
                        <li>Passengers: {vehicle.passengers}</li>
                        <li>Vechicle Class: {vehicle.vehicle_class}</li>
                  </ul>
            </div>
            ) : (
            <p>Loading...</p>
            )}
      </div>
    </div>
  )
}

export default VehicleDetails