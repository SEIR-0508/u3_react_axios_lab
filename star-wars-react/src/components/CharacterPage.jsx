import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const CharacterPage = () => {
    const [character, setCharacter] = useState('')
    let { id } = useParams()

    useEffect(()=> {
        const getCharacter = async (url) => {
            let results = []
            while (url) {
                const response = await axios.get(url)
                const data = response.data
                results = results.concat(data.results)
                url = data.next
            }
            setCharacter(results[id])
        }
        getCharacter('https://swapi.dev/api/people/')
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

    if (character.length === 0) {
        return <h2>Loading...</h2>
    } else {
    return (
        <div className="individualCard">
            <h2 className="individualTitle">{character.name} </h2>
            <div class="individualDisplay">
            <div className="titleInfo">
            <img src={characterImage}/>
            </div>
            <div className="additionalInfo">
            <p><strong>Height:</strong> {character.height}</p>
            <p><strong>Mass:</strong> {character.mass}</p>
            <p><strong>Hair Color:</strong> {character.hair_color}</p>
            <p><strong>Skin Color:</strong> {character.skin_color}</p>
            <p><strong>Eye Color:</strong> {character.eye_color}</p>
            <p><strong>Birth Year:</strong> {character.birth_year}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <Link class="goBack" to="/characters">Return to character list</Link>
            </div>
            </div>
        </div>
    )
    }
}

export default CharacterPage