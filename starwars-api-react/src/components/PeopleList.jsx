import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PeopleList = () => {

    const [people, setPeople] = useState([])

    useEffect(()=>{
        const getPeople = async() => {
          const response = await axios.get(`${BASE_URL}people/`)
          setPeople(response.data.results)
          console.log(response)
        }
        getPeople()
      },[])

      
      return(
        <div className="person">
          <h2>List of People</h2>
          {
            people.map((person) => (
              <div key={person.name} className="person-name">
                <h3>{person.name}</h3>
              </div>
            ))
          }
        </div>
      )
      }

export default PeopleList