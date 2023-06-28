import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import Header from './Header'

export default function CharacterDetails({ characters }){
    const [character, setCharacter] = useState('')
    let { height } = useParams()
    useEffect(()=>{
        let selectedCharacter = characters.find(character=>(character.height === height))
        setCharacter(selectedCharacter)
    })
    return character ? (
        <div>
            <Header />
            <button class='characterlist-button'><Link to='/character'>Back to Characters</Link></button>
            <div className='details'>
                <h1>{character.name}</h1>
                <p>Height: {character.height} cm</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Eye Color: {character.eye_color}</p>
                <p>Birth Year: {character.birth_year}</p>
            </div>
        </div>
    ) : <h3>Loading...</h3>
}