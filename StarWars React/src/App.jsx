import { useState } from 'react'
import Main from '../src/components/Main'
import Header from "../src/components/Header"
import '../styles/App.css'

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Header />
      </div>
      <div className='App-main'>
        <Main />
      </div>
    </div>
  )
}

export default App
