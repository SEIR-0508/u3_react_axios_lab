

const Species = (props) => {
  console.log(props)
  return (
    <div className="gallery">
      {
        props.species.map((species) => (
          <div key={species.id} className="card">
            <h2>{species.name}</h2>
            <p>Classification: {species.classification}</p>
            <p>Average Heigth: {species.average_height}cm</p>
            <p>Average Lifespan: {species.average_lifespan} yrs</p>
            <p>Skin Colors: {species.skin_colors}</p>
            <p>Eye Colors: {species.eye_colors}</p>
            <p>Hair Colors: {species.hair_colors}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Species