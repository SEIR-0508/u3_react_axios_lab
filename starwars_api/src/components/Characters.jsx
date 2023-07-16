import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const getCharacters = async () => {
        const response = await axios.get(`https://swapi.dev/api/people`)
        setCharacters(response.data.results)
        }
        getCharacters()
    }, [])

    let navigate = useNavigate()

    const showCharacter = (key) => {
        navigate(`${key}`)
    }

    return (
        <div className='characters'>
            <h2>Characters</h2>
            {
                characters.map((character, key) => (
                    <div key={key} onClick={()=>showCharacter(key)} className='card'>
                        <h3>{character.name}</h3>
                        <h5>Height: {character.height}</h5>
                        <h5>Hair color: {character.hair_color}</h5>
                        <h5>Eye color: {character.eye_color}</h5>
                        <h5>Gender: {character.gender}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters