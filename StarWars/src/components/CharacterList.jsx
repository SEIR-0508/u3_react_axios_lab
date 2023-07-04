import { useState, useEffect } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'
import { useNavigate } from 'react-router-dom'

const CharacterList = () => {

const [characters, setCharacters] = useState(null)

useEffect(()=> {
    const getCharacters = async () => {
    const response = await axios.get(`${BASE_URL}/people/`)
    setCharacters(response.data.results)
    console.log(response)
    console.log(characters)
    }
    getCharacters()
}, [])

let navigate = useNavigate()

const showCharacter = (key) => {
    navigate(`${key}`)
}

    return characters ? (
        <div className="characterListPage">
            <h2>List of characters</h2>
            {
                characters.map((character, key) => (
                    <div className="characterCard" key={key} onClick={() => showCharacter(key)}>
                        <h3>{character.name}</h3>
                    </div>
                ))
            }
        </div>
    ) : (<h3>Searching for characters...</h3>)
}

export default CharacterList