import './App.css'
import Header from './components/Header'
import Main from './components/Main'


function App() {
  

  return (
    <div className='app'>
      <div className='app-header'>
        <Header />
      </div>

      <div className='main'>
        <Main />
      </div>
    </div>
  )
}

export default App
