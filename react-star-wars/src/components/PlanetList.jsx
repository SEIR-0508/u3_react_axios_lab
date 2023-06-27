import React, { useEffect, useState } from "react";
import axios from 'axios'


const PlanetList = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const  getPlanets = async() => {
            const response = await axios.get('https://swapi.dev/api/planets/')
            setPlanets(response.data.results)
            console.log(response)
        }
        getPlanets()
    },[])

    return (
        <div className="Planet">
        <h2>List of Planets</h2>
        {
          planets.map((planet, key) => (
            <div key={key} onClick={()=>showPlanet(key)} className="card">
              <h3>{planet.name}</h3>
            </div>
          ))
        }
      </div>
    )
}

export default PlanetList