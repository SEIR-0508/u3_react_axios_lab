import React, { useEffect, useState } from "react";
import axios from 'axios'


const StarshipList = () => {
    const [starships, setStarships] = useState([])

    useEffect(() => {
        const  getStarships = async() => {
            const response = await axios.get('https://swapi.dev/api/starships/')
            setStarships(response.data.results)
            console.log(response)
        }
        getStarships()
    },[])

    return (
        <div className="starship">
        <h2>List of Starships</h2>
        {
          starships.map((starship, key) => (
            <div key={key} onClick={()=>showShip(key)} className="card">
              <h3>{starship.name}</h3>
            </div>
          ))
        }
      </div>
    )
}

export default StarshipList

