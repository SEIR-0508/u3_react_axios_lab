import { useEffect } from "react"
import axios from 'axios'
import { CHARACTERS_URL } from '../globals.js'
import Header from './Header'
import { useNavigate } from "react-router-dom"

export default function CharactersList({ characters, setCharacters }){

    let navigate = useNavigate()
    const showCharacter = (character) => {
        navigate(character.height)
    }
    useEffect(()=>{
        const getCharactersAPI = async() =>{
            const response = await axios.get(CHARACTERS_URL)
            setCharacters(response.data.results)
        }
        getCharactersAPI()
    },[])
    return characters ? (
        <div>
        <Header/>
        <div className='characters list'>
            <h2>Characters</h2>
                {console.log(characters)}
                {characters.map(character=>(
                    <div key={character.name} class='item' onClick={()=>(showCharacter(character))}>
                        <h1>{character.name}</h1>
                        <p>Birth Year: {character.birth_year}</p>
                    </div>
                ))}
        </div>
        </div>
    ) : <h3>Loading...</h3>
}