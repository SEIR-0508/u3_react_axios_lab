import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import StarshipDetails from './StarshipDetails'
import PeopleList from './PeopleList'
import PeopleDetails from './PeopleDetails'
import PlanetList from './PlanetsList'
import PlanetDetails from './PlanetDetails'
import FilmsList from './FilmsList'
import FilmDetails from './FilmDetails'
import SpeciesList from './SpeciesList'
import SpeciesDetails from './SpeciesDetails'
import VehiclesList from './VehiclesList'
import VehicleDetails from './VehiclesDetails'



export default function Main () {
    return ( 
        <>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<PeopleList />} />
                <Route path="/people/:id" element={<PeopleDetails />} />
                <Route path="/planets" element={<PlanetList />} />
                <Route path="/planets/:id" element={<PlanetDetails />} />
                <Route path="/films" element={<FilmsList />} />
                <Route path="/films/:id" element={<FilmDetails />} />
                <Route path="/species" element={<SpeciesList />} />
                <Route path="/species/:id" element={<SpeciesDetails />} />
                <Route path="/vehicles" element={<VehiclesList />} />
                <Route path="/vehicles/:id" element={<VehicleDetails />} />
                <Route path="/starships" element={<StarshipList />} />
                <Route path="/starships/:id" element={<StarshipDetails />} />
            </Routes>
        </div>
        </>
    )
}