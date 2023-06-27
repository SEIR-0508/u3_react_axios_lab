import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import FilmList from './FilmList'
import PlanetList from './PlanetList'
import CharacterList from './CharacterList'


const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element = {<Home />} />
            <Route exact path='/starships' element = {<StarshipList/>}/>
            <Route exact path='/films' element = {<FilmList/>} />
            <Route exact path='/planets' element = {<PlanetList/>} />
            <Route exact path ='characters' element = {<CharacterList/>} />
        </Routes>
    )
}

export default Main