import { useNavigate } from 'react-router-dom'


const PlanetList = (props) => {

   

  let navigate = useNavigate()
  const showPlanet = (planet) => {
    navigate(`${planet.name}`)
  }

  

    if(!props.planets){
        return <div>Loading..please wait.</div>
    }else {
    return (
        <div className="planet-grid">
            {
               props.planets.map((planet)=>(
                    <div key={planet.name} onClick={()=>showPlanet(planet)} className='planet'>
                        <h3>{planet.name}</h3>
                        
                    </div>
                ))
            }

        </div>
    )
}}

export default PlanetList