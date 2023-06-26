

const StarshipList = (props) => {
  return (
    <div className="gallery">
      {
        props.starships.map((starship) =>(
          <div key={starship.id} className="card">
            <h2>{starship.name}</h2>
            <p>Cost: ${starship.cost_in_credits}</p>
            <p>Capacity lbs.: {starship.cargo_capacity}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Max Speed: {starship.max_atmosphering_speed}</p>
          </div>
        ))
      }
    </div>
  )
}

export default StarshipList