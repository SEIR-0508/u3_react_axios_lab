import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import { useNavigate } from "react-router-dom"

const PlanetsList = () => {

    const [planets, setPlanets] = useState()

    useEffect(()=>{
        const getPlanets = async() => {
          const response = await axios.get(`${BASE_URL}planets/`)
          setPlanets(response.data.results)
          console.log(response)
        }
        getPlanets()
      },[])

      let navigate = useNavigate()

      const showPlanet = (key) => {
        navigate(`${key}`)
      }

      return planets ?(
        <div className="planet">
          <h2>List of Planets</h2>
          {
            planets.map((planet, key) => (
              <div key={key} onClick={()=>showPlanet(key)} className="planet-name">
                <h3>{planet.name}</h3>
              </div>
            ))
          }
        </div>
      ) : <h3> Finding all planets... </h3>
      }

export default PlanetsList