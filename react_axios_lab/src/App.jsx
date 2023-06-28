import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  

  return (
    <div className="app">
      <header className='app-header'>
        <Header />
      </header>

      <main className='app-main'>
        <Main />
        
      </main>
    </div>
    
    
  )
}

export default App
