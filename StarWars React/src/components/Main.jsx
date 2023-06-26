import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import PeopleList from './PeopleList'
import PlanetList from './PlanetsList'
import FilmsList from './FilmsList'
import SpeciesList from './SpeciesList'
import VehiclesList from './VehiclesList'



export default function Main () {
    return ( 
        <>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<PeopleList />} />
                <Route path="/planets" element={<PlanetList />} />
                <Route path="/films" element={<FilmsList />} />
                <Route path="/species" element={<SpeciesList />} />
                <Route path="/vehicles" element={<VehiclesList />} />
                <Route path="/starships" element={<StarshipList />} />
            </Routes>
        </div>
        </>
    )
}