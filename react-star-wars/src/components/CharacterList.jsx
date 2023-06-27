import React, { useEffect, useState } from "react";
import axios from 'axios'


const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const  getCharacters = async() => {
            const response = await axios.get('https://swapi.dev/api/people/')
            setCharacters(response.data.results)
            console.log(response)
        }
        getCharacters()
    },[])

    return (
        <div className="Character">
        <h2>List of Characters</h2>
        {
          characters.map((character, key) => (
            <div key={key} onClick={()=>showCharacter(key)} className="card">
              <h3>{character.name}</h3>
            </div>
          ))
        }
      </div>
    )
}

export default CharacterList