import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigation } from 'react-router-dom'
import { BASE_URL } from '../globals'



const StarshipList = () =>{



    const[ships, setShips]= useState([])

    useEffect(() => {
      const getShips = async () => {
        const response = await axios.get(`${BASE_URL}starships`)
        setShips(response.data.results)
        console.log(response.data.results)
      }
  
      getShips()
    },[])
  
    

    return(
        <div className="starship">
          <h2>List of Starships</h2>
          {
            ships.map((ship, key) => (
              <div key={key} className="card">
                <h3>{ship.name}</h3>
              </div>
            ))
          }
        </div>
      )
      }

export default StarshipList