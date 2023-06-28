import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const FilmDetails = (props) => {
      const [filmId, setFilmId] = useState("")
      const [film, setFilm] = useState(null)
      
      const { id } = useParams()
      useEffect(() => {
            setFilmId(id);
            
            const selectedFilm = props.films.find((film) => film.title === id);
            setFilm(selectedFilm)
      }, [])

      const BackToFilms = () => {
            return (
                  <Link to="/films" className="back-button">
                        Back
                  </Link>
            )
      }

  return (
      <div>
            <div className="back">
                  <BackToFilms />
            </div>
            <div className="gallery">
                  <h1>Film Details</h1>
                  {film ? (
                  <div className="card hidden">
                        <h2>{film.title}</h2>
                        <ul>
                              <li>{film.opening_crawl}</li>
                              <hr />
                              <li>Director: {film.director}</li>
                              <li>Producer: {film.producer}</li>
                              <li>Release Date: {film.release_date}</li>
                        </ul>
                  </div>
                  ) : (
                  <p>Loading...</p>
                  )}
            </div>
      </div>
  )
}

export default FilmDetails