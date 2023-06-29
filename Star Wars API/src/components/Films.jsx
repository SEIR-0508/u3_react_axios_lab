import { useState, useEffect } from 'react'
import axios from 'axios'


const Films = () => {


    const [film, setFilms] = useState([])

    useEffect(() => {
      const getFilms = async () => {
        const response = await axios.get(`https://swapi.dev/api/films/`)
        console.log(response)
        setFilms(response.data.results)
      }
    
    getFilms()
    
    }, [])

    return (
        
        <div> 
            <h2>
                Films
            </h2>
            {film.map((films) => (
                    <div key={films.title}
                    className="films-card">

                    <h2>{films.title}</h2>
                    <p>{films.episode_id}</p>
                    <p>{films.director}</p>
                    <p>{films.release_date}</p>
                    
                </div>
                
            ))}
            
        </div>

    )

}

export default Films