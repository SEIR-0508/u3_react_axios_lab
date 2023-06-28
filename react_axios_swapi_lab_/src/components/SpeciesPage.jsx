import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SpeciesPage = () => {

    const [species, setSpecies] = useState()
    //setting up the param to pull to be the ship's ID

    let {id} = useParams()

    useEffect(()=>{
        const getSpecies = async() => {
            const response = await axios.get(`https://swapi.dev/api/species/`)
            setSpecies(response.data.results[id])
        }
        getSpecies()
    },[])

    if (!species) {return <h3>Loading Species</h3>}
    return (
        <div className="detail-div">
            <h2>{species.name}</h2>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation}</p>
            <p>Language: {species.language}</p>
            <Link to="/species" className="back-btn">Back</Link>
        </div>
    ) 
}

export default SpeciesPage