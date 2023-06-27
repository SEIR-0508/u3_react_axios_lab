import { useNavigate } from "react-router-dom";
export default function Planets (props) {
let navigate = useNavigate()

const showPlanet = (planet) => {
    navigate(`/planets/${planet.name}`)
  } 
    return(
        <div className='grid'>
            {props.planets.map((planet)=> (
                <div key={planet.id} className="card" onClick={() => showPlanet(planet)}>
                    <h3>{planet.name}</h3>
                    <p>Rotation Period: {planet.rotation_period}</p>
                    <p>Orbital Period: {planet.orbital_period}</p>
                </div>
            ))}
        </div>
    )
}