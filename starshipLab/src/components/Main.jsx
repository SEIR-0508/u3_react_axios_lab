import {Route, Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'
import FilmList from './FilmList'
import PlanetList from './PlanetList'
import PeopleList from './PeopleList'
import StarshipPage from './StarshipPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Main = () => {


    const[ships, setShips]= useState([])

    useEffect(() => {
      const getShips = async () => {
        const response = await axios.get(`${BASE_URL}starships`)
        setShips(response.data.results[id])
   
      }
  
      getShips()
    },[])



    return(
    <div className='routes-container'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/starship" element={<StarshipList />}/>
            <Route path="/film" element={<FilmList />} />
            <Route path="/planet" element={<PlanetList />} />
            <Route path='/people' element={<PeopleList />} />
            <Route path='/starship/:id' element={<StarshipPage ships={ships}/>} />
        </Routes>
    
    </div>
    )
}

export default Main