import { useState, useEffect} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { BASE_URL } from './globals'
import axios from 'axios'
import './App.css'


const App = () => {
const [ships, setShips] = useState([])

useEffect(() => {
  const starShips = async () => {
    const response = await axios.get(`${BASE_URL}/starships`)
    console.log(response)
    setShips(response.data.results)

  }

starShips()

}, [])



  return (
    < div className='app'>
      < div className='app-header'>
        <Header />
      </div>
        <main className="app-main">
          <Main ships={ships} />
        </main>
    </div>
  )

} 


export default App
