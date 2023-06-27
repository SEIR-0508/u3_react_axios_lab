import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CharactersList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        const getCharacters = async () => {
            const response = await axios.get(`https://swapi.dev/api/people/`)
            console.log(response.data.results)
            setCharacters(response.data.results)
        }
        getCharacters()
    }, [characters])

    let navigate = useNavigate()

    const showCharacter = (id) => {
        navigate(`${id}/`)
    }

    return (
        <div className="character">
            <h2>Characters</h2>
            {
                characters.map((character, id) => (
                    <div key={id} onClick={()=>showCharacter(id)} className="card">
                        <h3>{character.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default CharactersList

