

const Films = (props) => {
  return (
    <div className="gallery">
      {
        props.films.map((film) => (
          <div key={film.id} className="card">
            <h2>{film.title}</h2>
            <p>Directed by: {film.director}</p>
            <p>Date Released: {film.release_date}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Films