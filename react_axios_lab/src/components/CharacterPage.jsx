import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CharacterPage = (props) => {

    const [character, setCharacter] = useState('')
    let { name } = useParams()


  useEffect(() => {
    let selectedCharacter = props.characters.find(
      (character) => character.name === name
      )
      setCharacter(selectedCharacter)
  }, [props.chaacters, name])

  return character ? (
    <div className="detail">
      <div className="detail-header">
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{character.name}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            
        </div>
        <p>Gender: {character.gender}</p>
      </div>
    <Link to='/characters'>Back</Link>
    </div>
  ) : <h3>Finding character...</h3>;
}



export default CharacterPage
