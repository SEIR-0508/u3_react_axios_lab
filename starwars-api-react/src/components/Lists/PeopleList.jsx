import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'
import { useNavigate } from "react-router-dom"

const PeopleList = () => {

    const [people, setPeople] = useState()

    useEffect(()=>{
        const getPeople = async() => {
          const response = await axios.get(`${BASE_URL}people/`)
          setPeople(response.data.results)
          console.log(response)
        }
        getPeople()
      },[])

      let navigate = useNavigate()

      const showPerson = (key) => {
        navigate(`${key}`)
      }

      return people ?(
        <div className="person">
          <h2>List of Characters</h2>
          {
            people.map((person, key) => (
              <div key={key} onClick={()=>showPerson(key)} className="person-name">
                <h3>{person.name}</h3>
              </div>
            ))
          }
        </div>
      ) : <h3> Finding all people... </h3>
      }

export default PeopleList