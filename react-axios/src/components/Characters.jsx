import { useState, useEffect } from 'react'
import { character_url } from '../global'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const getCharacters = async (URL, total) => {
            const res = await axios.get(URL)
            total = total.concat(res.data.results)
            setCharacters(total)
            console.log(total, 'render once', res.data.next)
            if (res.data.next) {
                console.log(res.data.next)
                getCharacters(res.data.next, total)
            }
        }
        getCharacters(character_url, [])
    }, [])

const navigate = useNavigate()

const showCharacter = (key) => {
    navigate(`${key}`)
}

    return characters.length != 0 ? (
        <div>
            <h2>Character List</h2>
            <div className="grid">
            {characters.map(character => (
                <div key={character.url.split('/').at(-2)} onClick={() => {showCharacter(character.url.split('/').at(-2))}} className='card'>
                    <h3>{character.name}</h3>
                </div>
            ))}
        </div>
        </div>
        
    ) : <h2>Finding Characters...</h2>
}

export default Characters