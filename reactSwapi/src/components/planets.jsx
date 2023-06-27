export default function Planets (props) {
    return(
        <div className='grid'>
            {props.planets.map((planet)=> (
                <div key={planet.id} className="card">
                    <h3>{planet.name}</h3>
                    <p>Rotation Period: {planet.rotation_period}</p>
                    <p>Orbital Period: {planet.orbital_period}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Gravity: {planet.gravity}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Surface Water: {planet.surface_water}</p>
                    <p>Population: {planet.population}</p>
                </div>
            ))}
        </div>
    )
}