import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Planets = () => {


    const [planet, setFilms] = useState([])

    useEffect(() => {
      const getPlanets= async () => {
        const response = await axios.get(`https://swapi.dev/api/planets/`)
        console.log(response)
        setFilms(response.data.results)
      }
    
    getPlanets()
    
    }, [])


    return (
        <div>
            <h2> 
                Thats no mooon
            </h2>

            {planet.map((planets) => (
                    <div key={planets.name}
                    className="films-card">

                    <h2>{planets.name}</h2>
                    <p>{planets.rotation_period}</p>
                    <p>{planets.orbital_period}</p>
                    <p>{planets.diameter}</p>
                    <p>{planets.climate}</p>
                    <p>{planets.gravity}</p>
                    <p>{planets.terrain}</p>
                    <p>{planets.surface_wate}</p>
                    <p>{planets.population}</p>

                    
                </div>
                
            ))}


        </div>

    )

}

export default Planets