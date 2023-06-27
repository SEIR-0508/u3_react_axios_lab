import { Route, Routes } from "react-router-dom"
import Home from './Home'
import StarshipList from './StarshipList'
import Films from "./Films"
import Planets from "./Planets"
import Characters from "./Characters"
import ShipDetails from "./StarshipPage"
import FilmDetails from "./FilmPage"
// import PlanetDetails from "./PlanetPage"
// import CharacterDetails from "./CharacterPage"


const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/starships" element={<StarshipList />} />
                <Route path="/films" element={<Films />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/starships/:id" element={<ShipDetails/>} />
                <Route path="/films/:id" element={<FilmDetails/>} />
                {/* <Route path="/planets/:id" element={<PlanetDetails/>} />
                <Route path="/characters/:id" element={<CharacterDetails/>} /> */}
            </Routes>
        </div>
    )
}

export default Main