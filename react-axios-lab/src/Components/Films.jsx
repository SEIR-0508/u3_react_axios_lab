import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Films = (props) => {

    return (
        <div className="starships-page">
            <Nav />
            <div className="grid-container">
                {
                    props.films.map((film) => (
                        <div key={film.title} className='card'>
                            <h2 className="card-title">{film.title}</h2>
                            <hr></hr>
                            <div className="card-data-container">
                                <p className="card-data card-data1">Episode:</p>
                                <p className="card-data card-data2">{film.episode_id}</p>
                                <p className="card-data card-data1">Director:</p>
                                <p className="card-data card-data2">{film.director}</p>
                                <p className="card-data card-data1">Release Date:</p>
                                <p className="card-data card-data2">{film.release_date}</p>
                            </div>
                            <div className="opening-scene-details">
                                <p className="card-data card-data1">Opening Crawl:</p>
                                <p className="card-data card-data2">{film.opening_crawl}</p>
                            </div>    
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Films