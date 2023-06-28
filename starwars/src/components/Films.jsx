import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Films = (props) => {
  let navigate = useNavigate()
    
  const showFilm = (film) => {
    navigate(`${film.title}`)  
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
          props.films.map((film) => (
            <div key={film.title} onClick={() => showFilm(film)} className="card">
              <h2>{film.title}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Films