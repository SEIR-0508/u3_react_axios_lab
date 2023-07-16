import { useState } from 'react'
import Characters from './components/Characters'
import Planets from './components/Planets'
import FilmList from './components/FilmList'
import Header from './components/Header'
import StarshipsList from './components/StarshipsList'
import Home from './components/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/starships' element={<StarshipsList />} />
        <Route path='/films' element={<FilmList />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/people' element={<Characters />} />
      </Routes>
    </div>
  )
}

export default App

// {starship.films.map((films, index) => (
//   <h5>Films: {films.name}</h5>
// ))}