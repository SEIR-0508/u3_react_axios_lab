import { useEffect } from "react"
import axios from 'axios'
import { CHARACTERS_URL } from '../globals.js'
import Header from './Header'

export default function CharactersList({ characters, setCharacters }){
    useEffect(()=>{
        const getCharactersAPI = async() =>{
            const response = await axios.get(CHARACTERS_URL)
            setCharacters(response.data.results)
        }
        getCharactersAPI()
    },[])
    return(
        <div>
        <Header/>
        <div className='characters'>
            <h2>Characters</h2>
            <ul>
                {console.log(characters)}
                {characters.map(character=>(
                    <li key={character.name}>{character.name}</li>
                ))}
            </ul>
        </div>
        </div>
    )
}