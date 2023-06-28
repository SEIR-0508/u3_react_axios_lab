import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Characters = (props) => {

  let navigate = useNavigate()
    
  const showCharacter = (character) => {
    navigate(`${character.name}`)  
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
          props.characters.map((character) => (
            <div key={character.name} onClick={() => showCharacter(character)} className="card">
              <h2>{character.name}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Characters