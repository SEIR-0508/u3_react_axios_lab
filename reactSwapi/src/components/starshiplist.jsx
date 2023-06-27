import { useNavigate } from "react-router-dom";
export default function Starships (props) {
let navigate = useNavigate()

const showStarship = (starship) => {
    navigate(`/starships/${starship.name}`)
  }

    return(
        <div className='grid'> 
            {props.starships.map((starship)=> (
                <div key={starship.id} onClick={() => showStarship(starship)} className="card">
                    <h3>{starship.name}</h3>
                    <p>Model: {starship.model}</p>
                    <p>Manufacturer {starship.manufacturer}</p>
                </div>
            ))}
        </div>
    )
}