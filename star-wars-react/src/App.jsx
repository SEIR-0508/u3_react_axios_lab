import './App.css'
//import Header from './Header'
//import Main from './Main'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <div className='App'>
      <div className="app-header">
        <Header />
      </div>

      <main className="app-main">
        <Main />
      </main>
    </div>
  )
}

export default App
