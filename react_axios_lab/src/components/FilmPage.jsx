import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const FilmPage = (props) => {

    const [film, setFilm] = useState('')
    let { title } = useParams()


  useEffect(() => {
    let selectedFilm = props.films.find(
      (film) => film.title === title
      )
      setFilm(selectedFilm)
  }, [props.films, title])

  return film ? (
    <div className="detail">
      <div className="detail-header">
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{film.title}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            
        </div>
        <p>Episode: {film.episode_id}</p>
      </div>
    <Link to='/films'>Back</Link>
    </div>
  ) : <h3>Finding film...</h3>;
}



export default FilmPage
