import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import { useNavigate } from "react-router-dom"

const StarshipList = () => {

    const [starships, setStarships] = useState()

    useEffect(()=>{
        const getStarships = async() => {
          const response = await axios.get(`${BASE_URL}starships/`)
          setStarships(response.data.results)
          console.log(response)
        }
        getStarships()
      },[])

      let navigate = useNavigate()

      const showShip = (key) => {
        navigate(`${key}`)
      }
      
      return starships ? (
        <div className="starship">
          <h2>List of Starships</h2>
          {
            starships.map((starship, key) => (
              <div key={key} onClick={()=>showShip(key)} className="starship-name">
                <h3>{starship.name}</h3>
              </div>
            ))
          }
        </div>
      ) : <h3> Finding all starships...</h3>
      }

export default StarshipList