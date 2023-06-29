import { useState, useEffect } from 'react'
import axios from 'axios'





const Characters = () => {
    console.log()

    const [people, setPeople] = useState([])

    useEffect(() => {
      const getPeople = async () => {
        const response = await axios.get(`https://swapi.dev/api/people/`)
        console.log(response)
        setPeople(response.data.results)
      }
    
    getPeople()
    
    }, [])

    return (
        <div className="characters">
            <h2> 
                Character  
            </h2>
            {people.map((person) => (
                     <div key={person.name}
                     className="people-card">
 
                     <h2>{person.name}</h2>
                     <p>{person.mass}</p>
                     <p>{person.hair_color}</p>
                     <p>{person.skin_color}</p>
                     <p>{person.eye_color}</p>
                     <p>{person.birth_year}</p>
                     <p>{person.birth_year}</p>
                     <p>{person.gender}</p>
                     <img src= {person.homeworld} alt = {person.name}>    
                     </img>
                    </div>
 
            ))}
               

         </div>




    )

}

export default Characters