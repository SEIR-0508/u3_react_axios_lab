import { useNavigate } from "react-router-dom";
export default function Films (props) {
let navigate= useNavigate()   
const showFilm = (film) => {
    navigate(`/films/${film.title}`)
  }    
    return(
        <div className='grid'>
            {props.films .map((film)=> (
                <div key={film.id} onClick={() => showFilm(film)}className="card">
                    <h3>{film.title}</h3>
                    <p>Episode: {film.episode_id}</p>
                </div>
            ))}
        </div>
    )
}