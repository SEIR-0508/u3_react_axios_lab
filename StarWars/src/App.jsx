import Header from './components/Header'
import Main from './components/Main'
import './App.css'

const App = () => {

  return (
    <div className="app">
      <header className="app-header">
      <Header />
      </header>
      <main className="app-main">
        <Main />
      </main>
    </div>
  )
}

export default App
