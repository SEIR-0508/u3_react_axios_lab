import { useNavigate } from "react-router-dom"

export default function Planets (props) {

    let navigate = useNavigate()

    const showPlanet = (name) => {
        navigate(`${name}`)
      }
      

    return(
            <div>
                {props.planets.map((planet, name) => {
                    return(
                        <div key={planet.name}>
                          <div>Name: {planet.name}</div>
                          <div>Diameter: {planet.diameter}</div>
                          <div>Population: {planet.population}</div>
                          <button onClick={() => showPlanet(name)}>Details</button>
                        </div>
                    )
                })}
            </div>
    )
}