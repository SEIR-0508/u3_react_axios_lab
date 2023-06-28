import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const SpeciesDetails = (props) => {
      const [speciesId, setSpeciesId] = useState("")
      const [species, setSpecies] = useState(null)
      
      const { id } = useParams()
      useEffect(() => {
            setSpeciesId(id);
            
            const selectedSpecies = props.species.find((species) => species.name === id);
            setSpecies(selectedSpecies)
      }, [])

      const BackToSpecies = () => {
            return (
                  <Link to="/species" className="back-button">
                        Back
                  </Link>
            )
      }

  return (
      <div>
            <div className="back">
                  <BackToSpecies />
            </div>
            <div className="gallery">
                  <h1>Species Details</h1>
                  {species ? (
                  <div className="card hidden">
                        <h2>{species.name}</h2>
                        <ul>
                              <li>Average Height:{species.average_height} m</li>
                              <li>Classification: {species.classification}</li>
                              <li>Average Lifespan: {species.average_lifespan}</li>
                              <li>Possible Eye Colors: {species.eye_colors}</li>
                              <li>Possible Hair Colors: {species.hair_colors}</li>
                              <li>Language: {species.language}</li>
                              <li>Possible Skin Colors: {species.skin_color}</li>
                        </ul>
                  </div>
                  ) : (
                  <p>Loading...</p>
                  )}
            </div>
      </div>
  )
}

export default SpeciesDetails