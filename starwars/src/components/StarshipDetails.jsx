import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const StarshipDetails = (props) => {
      const [starshipId, setStarshipId] = useState("")
      const [starship, setStarship] = useState(null)
      
      const { id } = useParams()
      useEffect(() => {
            setStarshipId(id);
            
            const selectedStarship = props.starships.find((starship) => starship.name === id);
            setStarship(selectedStarship)
      }, [])

      const BackToGames = () => {
            return (
                  <Link to="/starship" className="back-button">
                        Back
                  </Link>
            )
      }
      
      return (
            <div>
                  <div className="back">
                        <BackToGames />
                  </div>
                  <div className="gallery">
                        <h1>Starship Details</h1>
                        {starship ? (
                        <div className="card hidden">
                              <h2>{starship.name}</h2>
                              <ul>
                                    <li>Cargo Capacity: {starship.cargo_capacity} lbs </li>
                                    <li>Crew: {starship.crew}</li>
                                    <li>Hyperdrive: {starship.hyperdrive_rating}</li>
                                    <li>Length: {starship.length}</li>
                                    <li>Manufacturer: {starship.manufacturer}</li>
                              </ul>
                  </div>
                  ) : (
                  <p>Loading...</p>
                  )}
                  </div>
            </div>
      )
}

export default StarshipDetails