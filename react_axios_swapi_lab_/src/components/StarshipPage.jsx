import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const StarshipPage = () => {

    const [starship, setStarship] = useState()
    //setting up the param to pull to be the ship's ID

    let {id} = useParams()

    useEffect(()=>{
        const getStarship = async() => {
            const response = await axios.get(`https://swapi.dev/api/starships/`)
            setStarship(response.data.results[id])
        }
        getStarship()
    },[])

    if (!starship) {return <h3>Loading starship</h3>}
    return (
        <div className="detail-div">
            <h2>{starship.name}</h2>
            <p>Price: {starship.cost_in_credits} credits</p>
            <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
            <p>Starship Class: {starship.starship_class}</p>
            <Link to="/starships" className="back-btn">Back</Link>
        </div>
    ) 
}

export default StarshipPage
