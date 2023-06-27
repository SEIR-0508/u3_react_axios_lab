import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ShipDetails(){

//setting up the individiual starship in state
const [starship, setStarship] = useState()
//setting up the param to pull to be the ship's ID
console.log(useParams())
let {id} = useParams()

useEffect(()=>{
  const getStarship = async() => {
    const response = await axios.get(`https://swapi.dev/api/starships/${id}`)
    console.log(response)
    setStarship(response.data)
  }
  getStarship()
},[])



return starship ? (
  <div className="detail">
    <h2>Name: {starship.name}</h2>
    ... Lets put more Data here! ... 
    <Link to="/starships"> Return to starship list</Link>
  </div>
) : <h3>Finding starships...</h3>
}
