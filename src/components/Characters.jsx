import { useNavigate } from "react-router-dom"

export default function Characters (props) {

    let navigate = useNavigate()

    const showCharacter = (name) => {
        navigate(`${name}`)
      }
      

    return(
            <div>
                {props.characters.map((character, name) => {
                    return(
                        <div key={character.name}>
                          <div>Name: {character.name}</div>
                          <div>Gender: {character.gender}</div>
                          <button onClick={() => showCharacter(name)}>Details</button>
                        </div>
                    )
                })}
            </div>
    )
}