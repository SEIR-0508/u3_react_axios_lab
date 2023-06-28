import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PlanetPage = (props) => {

    const [planet, setPlanet] = useState('')
    let { name } = useParams()


  useEffect(() => {
    let selectedPlanet = props.planets.find(
      (planet) => planet.name === name
      )
      setPlanet(selectedPlanet)
  }, [props.planets, name])

  return planet ? (
    <div className="detail">
      <div className="detail-header">
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{planet.name}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            
        </div>
        <p>Population: {planet.population}</p>
      </div>
    <Link to='/planets'>Back</Link>
    </div>
  ) : <h3>Finding planet...</h3>;
}



export default PlanetPage
