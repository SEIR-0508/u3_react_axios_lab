import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import FilmsList from './Films'
import CharactersList from './Characters'
import PlanetsList from './Planets'
import StarshipPage from './StarshipPage'

const Main = () => {
    return (
        <div className="routes-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/starships" element={<StarshipList />} />
                <Route path="/films" element={<FilmsList />} />
                <Route path="/planets" element={<PlanetsList />} />
                <Route path="/characters" element={<CharactersList />} />
                <Route path="/starships/:id" element={<StarshipPage />} />
            </Routes>
        </div>
    )
}

export default Main