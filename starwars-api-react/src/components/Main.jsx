import StarshipList from "./Lists/StarshipList"
import ShipDetails from "./Pages/StarshipPage"

import FilmsList from "./Lists/FilmsList"
import FilmDetails from "./Pages/FilmPage"

import PeopleList from "./Lists/PeopleList"
import PersonDetails from "./Pages/PeoplePage"


import PlanetsList from "./Lists/PlanetsList"
import PlanetDetails from "./Pages/PlanetPage"

import Home from "./Home"
import { Route, Routes } from 'react-router-dom'

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/starships" element={<StarshipList />} />
            <Route path="/starships/:id" element={<ShipDetails />} />
            <Route path="/films" element={<FilmsList/>} />
            <Route path="/films/:id" element={<FilmDetails />} />
            <Route path="/people" element={<PeopleList/>} />
            <Route path="/people/:id" element={<PersonDetails />} />
            <Route path="/planets" element={<PlanetsList/>} />
            <Route path="/planets/:id" element={<PlanetDetails />} />
        </Routes>
    )
}

export default Main