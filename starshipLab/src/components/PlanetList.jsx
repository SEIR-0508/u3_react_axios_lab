import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


const PlanetList = () => {
    

    const[planets, setPlanets] = useState([])

    useEffect(() => {
        const getPlanets = async () => {
            const response = await axios.get(`${BASE_URL}planets`)
            setPlanets(response.data.results)
            console.log(response)
        }

        getPlanets()
    },[])

    return (
        <div className='planet'>
            <h2>List of planets</h2>
            {
                planets.map((planet, key) =>(
                    <div key={key} className='card'>
                        <h3>{planet.name}</h3>
                        </div>
                ))
            }




        </div>
    )





}

export default PlanetList