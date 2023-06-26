import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const StarshipList = () => {

    const [starships, setStarships] = useState([])

    useEffect(()=>{
        const getStarships = async() => {
          const response = await axios.get(`${BASE_URL}starships/`)
          setStarships(response.data.results)
          console.log(response)
        }
        getStarships()
      },[])

      
      return(
        <div className="starship">
          <h2>List of Starships</h2>
          {
            starships.map((starship) => (
              <div key={starship.name} className="starship-name">
                <h3>{starship.name}</h3>
              </div>
            ))
          }
        </div>
      )
      }

export default StarshipList