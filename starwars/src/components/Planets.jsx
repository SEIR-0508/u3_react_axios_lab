

const Planets = (props) => {
  return (
    <div className="gallery">
      {
        props.planets.map((planet) => (
          <div key={planet.id} className="card">
              <h2>{planet.name}</h2>
              <p>Climate: {planet.climate}</p>
              <p>Rotation Period: {planet.rotation_period}</p>
              <p>Terrain: {planet.terrain}</p>
              <p>Population: {planet.poplulation}</p>
              <p>Gravitational Pull: {planet.gravity}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Planets