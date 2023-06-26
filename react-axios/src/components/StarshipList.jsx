import { useState, useEffect } from 'react'
import { starships_url } from '../global'
import axios from 'axios'

const StarshipList = (props) => {
    const [starships, setStarships] = useState([])

    useEffect(() => {
        let starshipsTotal = []
        const getStarships = async (URL) => {
            const res = await axios.get(URL)
            console.log(res.data.results)
            starshipsTotal = starshipsTotal.concat(res.data.results)
            if (res.data.next) {
                getStarships(res.data.next)
            }
            console.log(starshipsTotal)
            setStarships(starshipsTotal)
            // setStarships(res.data.results)
        }
        getStarships(starships_url)
    }, [])
    
    return (
        <div className="starships">
            {starships.map(starship => (
                <ul key={starship.model} className='starship'>
                    <h3>{starship.name}</h3>
                    <li>manufacturer: {starship.manufacturer}</li>
                    <li>model: {starship.model}</li>
                    <li>length: {starship.length}</li>
                </ul>
            ))}
        </div>
    )
}

export default StarshipList