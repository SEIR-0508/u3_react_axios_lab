import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'
import axios from 'axios'
import StarshipList from './components/StarshipList'


function App() {
  const [starShips, setShips] = useState([])
  useEffect(() => {
    const getShips = async () => {
      const response = await axios.get(`${BASE_URL}/starships`)
      setShips(response.data.results)
      console.log(response.data.results)
    }
    getShips()
  }, [])

  return (
    <div className='main'>
      <Main />
      <Header />
      <StarshipList />
    </div>
  )
}

export default App
