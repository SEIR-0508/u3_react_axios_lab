import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CharacterPage = () => {

    const [characters, setCharacter] = useState()
    //setting up the param to pull to be the ship's ID

    let {id} = useParams()

    useEffect(()=>{
        const getCharacter = async() => {
            const response = await axios.get(`https://swapi.dev/api/people/`)
            setCharacter(response.data.results[id])
        }
        getCharacter()
    },[])

    if (!characters) {return <h3>Loading character</h3>}
    return (
        <div className="detail-div">
            <h2>{characters.name}</h2>
            <p>height: {characters.height}</p>
            <p>Born: {characters.birth_year}</p>
            <p>Complexion: {characters.skin_color}</p>
            <Link to="/characters" className="back-btn">Back</Link>
        </div>
    ) 
}

export default CharacterPage
