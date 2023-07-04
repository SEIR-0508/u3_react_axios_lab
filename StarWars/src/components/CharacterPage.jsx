import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import BASE_URL from '../globals'

const CharacterPage = () => {

    const [character, setCharacter] = useState('')

    let { id } = useParams()

    useEffect(()=>{
        const getCharacter = async() => {
          const response = await axios.get(`${BASE_URL}/people/`)
          setCharacter(response.data.results[id])
          console.log(response)
        }

        getCharacter()
      },[])

return character ? (
    <div className="characterDetailsPage">
        <h2>Name: {character.name}</h2>
        <h3>Birth year: {character.birth_year}</h3>
        <h3>Weight: {character.mass} kilograms</h3>
        <button><Link to='/characters'>characters</Link></button>
    </div>
) : <h3>Finding character...</h3>

}

export default CharacterPage