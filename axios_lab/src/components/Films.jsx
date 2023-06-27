

export default function Films(props) {
    const { showFilm } = props

    return(
        <div>
        {props.films.map((film, index) => (
           <div key={index}
                 className="card"
                 onClick={()=>showFilm(film)} >
                 <div>
                   <h3>Title : {film.title}</h3>
                  
                  
                 </div>
                 </div>
        ))}
   </div>
    )
}