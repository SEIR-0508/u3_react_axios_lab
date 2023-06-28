import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CharactersList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        const getCharacters = async (url) => {
            let results = []
            while (url) {
                const response = await axios.get(url)
                const data = response.data
                results = results.concat(data.results)
                url = data.next
            }
            setCharacters(results)
        }
        getCharacters('https://swapi.dev/api/people/')
    }, [characters])

    let navigate = useNavigate()

    const showCharacter = (id) => {
        navigate(`${id}/`)
    }

    const characterImages = []

    for (let i=0; i<characters.length; i++) {
        let BASE_URL = String("https://swapi.dev/api/people/")
        let characterUrl = String(characters[i].url)
        let start = characterUrl.indexOf(BASE_URL)
        let end = start + BASE_URL.length

        let characterSlash = characterUrl.substring(0, start - 1) + characterUrl.substring(end)
        let characterNumber = characterSlash.replace('/', '')
        console.log(characterNumber)
        characterImages.push(`https://starwars-visualguide.com/assets/img/characters/${characterNumber}.jpg`)
    }


    if (characters.length === 0) {
        return <h2>Loading...</h2>
    } else {
    return (
        <div className="characters">
            <h2>Characters</h2>
            <div className="character">
            {
                characters.map((character, id) => (
                    <div key={id} onClick={()=>showCharacter(id)} className="card">
                        <h3>{character.name}</h3>
                        <img src={characterImages[id]}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
    }
}

export default CharactersList

