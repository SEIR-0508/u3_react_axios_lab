import { useState, useEffect } from 'react'
import axios from 'axios'

const CharactersList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        const getCharacters = async () => {
            const response = await axios.get('https://swapi.dev/api/people')
            //console.log(response.data.results)
            setCharacters(response.data.results)
        }
        getCharacters()
    }, [])

    //console.log(starships)

    return (
        <div className="grid">
            {
                characters.map((character)=> (
                    <div
                    className="card">
                        <h3> Name: {character.name} </h3>
                        <p> Height: {character.height} </p>
                        <p> Mass: {character.mass} </p>
                        <p> Hair Color: {character.hair_color} </p>
                        <p> Skin Color: {character.skin_color} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default CharactersList