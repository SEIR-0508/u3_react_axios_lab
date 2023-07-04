import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../globals'

const StarshipPage = () => {

    const [starship, setStarship] = useState('')

    let { id } = useParams()

    useEffect(()=>{
        const getStarship = async() => {
          const response = await axios.get(`${BASE_URL}/starships/`)
          setStarship(response.data.results[id])
          console.log(response)
        }
        getStarship()
      },[])

return starship ? (
    <div className="starshipDetailsPage">
        <h2>Name: {starship.name}</h2>
        <h3>manufacturer: {starship.manufacturer}</h3>
        <h3>Cost: {starship.cost_in_credits} credits</h3>
        <img src="{starship.url}" alt="" />
        <button><Link to='/Starships'>Starships</Link></button>
    </div>
) : <h3>Finding starship...</h3>

}

export default StarshipPage