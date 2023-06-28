import { useState,useEffect } from 'react'
import { useParams,Link } from "react-router-dom"
import Header from './Header'

export default function SpeciesDetails({ species }){
    const [organism, setOrganism] = useState('')
    let { classification } = useParams()

    useEffect(()=>{
        let selectedOrganism = species.find(organism=>(organism.classification === classification))
        setOrganism(selectedOrganism)
    },[organism.classification, classification])

    return organism ? (
        <div>
            <Header />
            <button class='specieslist-button'><Link to='/species'>Back to Species</Link></button>
            <div class='details'>
                <h1>{organism.name}</h1>
                <p>Classification: {organism.classification}</p>
                <p>Language: {organism.language}</p>
                <p>Average Lifespan: {organism.average_lifespan} years</p>
                <p>Average Height: {organism.average_height}</p>
            </div>
        </div>
     ) : <h3>Loading...</h3>
 }

 