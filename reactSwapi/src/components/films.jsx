export default function Films (props) {
    return(
        <div className='grid'>
            {props.films .map((film)=> (
                <div key={film.id} className="card">
                    <h3>{film.title}</h3>
                    <p>Episode: {film.episode_id}</p>
                    <p>Opening Crawl: {film.opening_crawl}</p>
                    <p>Director: {film.director}</p>
                    <p>Producer: {film.producer}</p>
                    <p>Release Date: {film.release_date}</p>
                </div>
            ))}
        </div>
    )
}