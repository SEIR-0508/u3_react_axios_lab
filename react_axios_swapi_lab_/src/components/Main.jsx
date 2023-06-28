import { Route, Routes } from "react-router-dom";
import Home from './Home'

import StarshipList from './StarshipList'
import Films from './Films'
import Planets from './Planets'
import Characters from './Characters'
import Species from './Species'
import Vehicles from './Vehicles'

import StarshipPage from './StarshipPage'
import FilmPage from './FilmPage'
import PlanetPage from './PlanetPage'
import CharacterPage from './CharacterPage'
import SpeciesPage from './SpeciesPage'
import VehiclePage from './VehiclePage'

import FourOFour from "./FourOFour";

const Main= () => {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/starships" element={<StarshipList />} />
            <Route exact path="/starships/:id" element={<StarshipPage />} />
            <Route exact path="/films" element={<Films />} />
            <Route exact path="/films/:id" element={<FilmPage />} />
            <Route exact path="/planets" element={<Planets />} />
            <Route exact path="/planets/:id" element={<PlanetPage />} />
            <Route exact path="/characters" element={<Characters />} />
            <Route exact path="/characters/:id" element={<CharacterPage />} />
            <Route exact path="/species" element={<Species />} />
            <Route exact path="/species/:id" element={<SpeciesPage />} />
            <Route exact path="/vehicles" element={<Vehicles />} />
            <Route exact path="/vehicles/:id" element={<VehiclePage />} />
            <Route exact path="/*" element={<FourOFour/>}/>
        </Routes>
    )
}

export default Main