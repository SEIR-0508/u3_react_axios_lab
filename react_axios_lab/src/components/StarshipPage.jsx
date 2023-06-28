import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const StarshipPage = (props) => {

    const [starship, setStarship] = useState('')
    let { name } = useParams()


  useEffect(() => {
    let selectedStarship = props.starships.find(
      (starship) => starship.name === name
      )
      setStarship(selectedStarship)
  }, [props.starships, name])

  return starship ? (
    <div className="detail">
      <div className="detail-header">
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{starship.name}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            
        </div>
        <p>Manufacturer: {starship.manufacturer}</p>
      </div>
    <Link to='/starships'>Back</Link>
    </div>
  ) : <h3>Finding starship...</h3>;
}



export default StarshipPage
