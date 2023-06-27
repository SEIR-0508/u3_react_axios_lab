import { useNavigate } from "react-router-dom"

export default function Films (props) {

    let navigate = useNavigate()

    const showFilm = (title) => {
        navigate(`${title}`)
      }
      

    return(
            <div>
                {props.films.map((film, title) => {
                    return(
                        <div key={film.title}>
                          <div>Title: {film.title}</div>
                          <div>Director: {film.director}</div>
                          <div>Release Date: {film.release_date}</div>
                          <button onClick={() => showFilm(title)}>Details</button>
                        </div>
                    )
                })}
            </div>
    )
}