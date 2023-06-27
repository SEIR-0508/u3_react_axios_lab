import React from 'react'
import './index.css'
import './App.css'
import Home from './Components/Home'
import Starships from './Components/Starships'
import Films from './Components/Films'
import Planets from './Components/Planets'
import Characters from './Components/Characters'
import ShipDetails from './Components/StarshipItem'
import CharacterDetails from './Components/CharacterItem'
import PlanetDetails from './Components/PlanetItem'
import FilmDetails from './Components/FilmItem'
import axios from 'axios'
import { BASE_URL } from './globals'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getStarships = async () => {
        const response = await axios.get(`${BASE_URL}/starships`)
        setStarships(response.data.results)
    }
    const getFilms = async () => {
        const response = await axios.get(`${BASE_URL}/films`)
        setFilms(response.data.results)
    }
    const getPlanets = async () => {
        const response = await axios.get(`${BASE_URL}/planets`)
        setPlanets(response.data.results)
    }
    const getCharacters = async () => {
        const response = await axios.get(`${BASE_URL}/people`)
        setCharacters(response.data.results)
    }

    getStarships()
    getFilms()
    getPlanets()
    getCharacters()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route exact path="/starships" element = {<Starships starships={starships}/>}/>
        <Route exact path="/films" element = {<Films films={films}/>}/>
        <Route exact path="/planets" element = {<Planets planets={planets}/>}/>
        <Route exact path="/characters" element = {<Characters characters={characters}/>}/>
        <Route exact path="/starships/:id" element = {<ShipDetails />}/>
        <Route exact path="/characters/:id" element = {<CharacterDetails />}/>
        <Route exact path="/planets/:id" element = {<PlanetDetails />}/>
        <Route exact path="/films/:id" element = {<FilmDetails />}/>
      </Routes>
    </div>
  )
}

export default App
