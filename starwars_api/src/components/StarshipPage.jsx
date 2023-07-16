import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StarshipPage = () => {

    const [pages, setPages] = useState([])

    useEffect(() => {
        const getPages = async () => {
        const response = await axios.get(`https://swapi.dev/api/`)
        setPages(response.data.results)
        }
        getPages()
    }, [])

    let navigate = useNavigate()

    const showPage = (key) => {
        navigate(`${key}`)
    }

    return (
        <div className='pages'>
            <h2>Pages</h2>
            {
                pages.map((page, key) => (
                    <div key={key} onClick={()=>showPages(key)} className='card'>
                        <h3>Planet: {page.name}</h3>
                        <h5>Population: {page.population}</h5>
                        <h5>Climate: {page.climate}</h5>
                        <h5>Terrain: {page.terrain}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default StarshipPage