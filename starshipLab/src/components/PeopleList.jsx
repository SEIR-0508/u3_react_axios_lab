import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PeopleList = () =>{

    const[people, setPeople] =useState([])

    useEffect(() => {
        const getPeople = async() => {
            const response = await axios.get(`${BASE_URL}people`)
            setPeople(response.data.results)
            console.log(response)
        }

        getPeople()
    }, [])



return(
    <div className='people'>
        <h2>List of people</h2>
        {
            people.map((people, key) => (
                <div key={key} className='card'>
                    <h3>{people.name}</h3>
                    </div>
            ))
        }




    </div>
    
)

}
export default PeopleList