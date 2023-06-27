import { useState, useEffect } from 'react'
import { character_url } from '../global'
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

    console.log(characters)
    return characters.length != 0 ? (
        <div>
            <h2>Characters List</h2>
            <div className="grid">
            {characters.map(character => (
                <div key={character.name} className='card'>
                    <h3>{character.name}</h3>
                    {/* <li>Height: {character.height}</li>
                    <li>Mass: {character.mass}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Hair Color: {character.hair_color}</li>
                    <li>Eye Color: {character.eye_color}</li> */}
                </div>
            ))}
        </div>
        </div>
        
    ) : <h2>Finding Characters...</h2>
}

export default Characters