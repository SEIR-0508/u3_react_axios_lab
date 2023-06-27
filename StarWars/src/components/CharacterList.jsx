import { useState, useEffect } from 'react'
import axios from 'axios'
import BASE_URL from '../globals'

const CharacterList = () => {

const [characters, setCharacters] = useState([])

useEffect(()=> {
    const getCharacters = async () => {
    const response = await axios.get(`${BASE_URL}/people/`)
    setCharacters(response.data.results)
    console.log(response)
    console.log(characters)
    }

    getCharacters()
}, [])



    return (
        <div className="characterListPage">
            <h2>List of Characters</h2>
            {
                characters.map((character, key) => (
                    <div key={key} className="card">
                        <h3>{character.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default CharacterList