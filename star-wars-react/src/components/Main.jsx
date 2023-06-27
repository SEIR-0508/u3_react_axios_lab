import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import FilmsList from './Films'
import CharactersList from './Characters'
import PlanetsList from './Planets'
import StarshipPage from './StarshipPage'
import FilmPage from './FilmPage'
import CharacterPage from './CharacterPage'
import PlanetPage from './PlanetPage'

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
                <Route path="/films/:id" element={<FilmPage />} />
                <Route path="/characters/:id" element={<CharacterPage />} />
                <Route path="/planets/:id" element={<PlanetPage />} />
            </Routes>
        </div>
    )
}

export default Main