import { useNavigate } from 'react-router-dom'


const FilmList = (props) => {

   

  let navigate = useNavigate()
  const showFilm = (film) => {
    navigate(`${film.title}`)
  }

  

    if(!props.films){
        return <div>Loading..please wait.</div>
    }else {
    return (
        <div className="film-grid">
            {
               props.films.map((film)=>(
                    <div key={film.title} onClick={()=>showFilm(film)} className='film'>
                        <h3>{film.title}</h3>
                        
                    </div>
                ))
            }

        </div>
    )
}}

export default FilmList