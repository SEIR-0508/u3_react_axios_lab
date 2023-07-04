import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import StarshipPage from './StarshipPage'
import FilmList from './FilmList'
import FilmPage from './FilmPage'
import PlanetList from './PlanetList'
import PlanetPage from './PlanetPage'
import CharacterList from './CharacterList'
import CharacterPage from './CharacterPage'


const Main = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<Home />} />
            <Route exact path = '/starships' element = {<StarshipList />} />
            <Route exact path = '/starships/:id' element = {<StarshipPage />} />
            <Route exact path = '/films' element = {<FilmList />} />
            <Route exact path = '/films/:id' element = {<FilmPage />} />
            <Route exact path = '/planets' element = {<PlanetList />} />
            <Route exact path = '/planets/:id' element = {<PlanetPage />} />
            <Route exact path = 'characters' element = {<CharacterList />} />
            <Route exact path = 'characters/:id' element = {<CharacterPage />} />
        </Routes>
    )
}

export default Main