import { useNavigate } from "react-router-dom";
export default function Characters (props) {
let navigate = useNavigate()

const showPerson = (people) => {
    navigate(`/characters/${people.name}`)
  }     
    
    return(
        <div className='grid'>
            {props.peoples.map((people)=> (
                <div key={people.id} onClick={() => showPerson(people)} className="card">
                    <h3>{people.name}</h3>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                </div>
            ))}
        </div>
    )
}