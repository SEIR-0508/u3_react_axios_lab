

const Vehicles = (props) => {
  return (
    <div className="gallery">
      {
        props.vehicles.map((vehicle) => (
          <div key={vehicle.id} className="card">
            <h2>{vehicle.name}</h2>
            <p>Length: {vehicle.length}</p>
            <p>Cost in Credits: ${vehicle.cost_in_credits}</p>
            <p>Model: {vehicle.model}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Vehicles