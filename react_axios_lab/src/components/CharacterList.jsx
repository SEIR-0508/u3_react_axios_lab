import { useNavigate } from 'react-router-dom'


const CharacterList = (props) => {

   

  let navigate = useNavigate()
  const showCharacter = (character) => {
    navigate(`${character.name}`)
  }

  

    if(!props.characters){
        return <div>Loading..please wait.</div>
    }else {
    return (
        <div className="character-grid">
            {
               props.characters.map((character)=>(
                    <div key={character.name} onClick={()=>showCharacter(character)} className='character'>
                        <h3>{character.name}</h3>
                        
                    </div>
                ))
            }

        </div>
    )
}}

export default CharacterList