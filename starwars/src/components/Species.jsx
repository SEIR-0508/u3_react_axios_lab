import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Species = (props) => {

  let navigate = useNavigate()
    
  const showSpecies = (species) => {
    navigate(`${species.name}`)  
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
          props.species.map((species) => (
            <div key={species.name} onClick={() => showSpecies(species)} className="card">
              <h2>{species.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Species