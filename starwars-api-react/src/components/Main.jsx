import StarshipList from "./StarshipList"
import FilmsList from "./FilmsList"
import PeopleList from "./PeopleList"
import PlanetsList from "./PlanetsList"
import Home from "./Home"
import { Route, Routes } from 'react-router-dom'

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/starships" element={<StarshipList/>} />
            <Route path="/films" element={<FilmsList/>} />
            <Route path="/people" element={<PeopleList/>} />
            <Route path="/planets" element={<PlanetsList/>} />
        </Routes>
    )
}

export default Main