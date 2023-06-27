import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'
import { BASE_URL } from './globals'
import axios from 'axios'

function App() {
  
  const [starships, setStarships] = useState([])
  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setStarships(response.data.results)
    }

    getStarships()
  }, [])


  const [films, setFilms] = useState([])
  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`${BASE_URL}/films`)
      setFilms(response.data.results)
    }

    getFilms()
  }, [])


  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`${BASE_URL}/people`)
      setCharacters(response.data.results)
    }

    getCharacters()
  }, [])




  const [planets, setPlanets] = useState([])
  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`${BASE_URL}/planets`)
      setPlanets(response.data.results)
    }

    getPlanets()
  }, [])


  

  return (
    <>
    <Header />
    <Main starships={starships}
          films={films}
          characters={characters}
          planets={planets}/>
      
    </>
  )
}

export default App
