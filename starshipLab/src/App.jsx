import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { BASE_URL } from './globals'
import axios from 'axios'


function App() {


  return (
  <div className="app">
    <header className="appHeader">
      <Header />
    </header>
    <main className="appMain">
      <Main />
    </main>


  </div>
  )
}

export default App
