import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


const StarshipList = (props) => {

    let navigate = useNavigate()
    
    const showStarship = (starship) => {
    navigate(`${starship.name}`)  
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
          props.starships.map((starship) =>(
            <div key={starship.name} onClick={() => showStarship(starship)} className="card">
              <h2>{starship.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default StarshipList