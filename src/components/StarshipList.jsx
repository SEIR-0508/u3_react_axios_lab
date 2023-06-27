//StarshipList.jsx 
import { useNavigate } from "react-router-dom"

export default function StarshipsList(props){


let navigate = useNavigate()

const showShip = (name) => {
  navigate(`${name}`)
}

return(
  <div className="starship">
    <h2>List of Starships</h2>
    {
      props.starships.map((starship, name) => (
        <div name={name} onClick={()=>showShip(name)} className="card">
                        <div key={starship.name}>
                          <div>Name: {starship.name}</div>
                          <div>Length: {starship.length}m</div>
                          <div>Crew size: {starship.crew}</div>
                          <button onClick={() => showShip(name)}>Details</button>
                        </div>
        </div>
      ))
    }
  </div>
)
}