import { SPECIES_URL} from '../globals.js'
import axios from 'axios'
import { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function SpeciesList({ species, setSpecies }){
    let navigate = useNavigate()
    const showOrganism = (organism) =>{
        navigate(organism.classification)
    }
    useEffect(()=>{
        const getSpeciesAPI = async() => {
            const response = await axios.get(SPECIES_URL)
            setSpecies(response.data.results)
            console.log(species)
        }
        getSpeciesAPI()
    },[])
    return species ? (
        <div>
            <Header />
            <div className='species list'>
                <h2>Species</h2>
                {species.map(organism=>(
                    <div key={organism.name} className='item' onClick={()=>showOrganism(organism)}>
                        <h1>{organism.name}</h1>
                        <p>Classification: {organism.classification}</p>
                    </div>
                ))}
            </div>
        </div>
    ) : <h3>Loading...</h3>
}