import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const CharacterPage = () => {
    const [character, setCharacter] = useState('')
    let { id } = useParams()

    useEffect(()=>{
        const getCharacter = async () => {
            const response = await axios.get(`https://swapi.dev/api/people/`)
            //console.log(response.data)
            setCharacter(response.data.results[id])
        }
        getCharacter()
    }, [character, id])

    console.log(character)

    let BASE_URL = String("https://swapi.dev/api/people/")
    let characterUrl = String(character.url)
    let start = characterUrl.indexOf(BASE_URL)
    let end = start + BASE_URL.length

    let characterSlash = characterUrl.substring(0, start - 1) + characterUrl.substring(end)
    let characterNumber = characterSlash.replace('/', '')
    console.log(characterNumber)

    let characterImage = `https://starwars-visualguide.com/assets/img/characters/${characterNumber}.jpg`


    return character ? (
        <div className="card">
            <h2>Name: {character.name} </h2>
            <img src={characterImage}/>
            <Link to="/characters">Return to character list</Link>
        </div>
    ) : null;
}

export default CharacterPage