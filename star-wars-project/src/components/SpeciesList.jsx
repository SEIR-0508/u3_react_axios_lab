import { SPECIES_URL} from '../globals.js'
import axios from 'axios'
import { useEffect } from 'react'
import Header from './Header'

export default function SpeciesList({ species, setSpecies }){
    useEffect(()=>{
        const getSpeciesAPI = async() => {
            const response = await axios.get(SPECIES_URL)
            setSpecies(response.data.results)
            console.log(species)
        }
        getSpeciesAPI()
    },[])
    return(
        <div>
            <Header />
            <div className='species'>
                <h2>Species</h2>
                <ul>
                {species.map(organism=>(
                    <li key={organism.name}>{organism.name}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}