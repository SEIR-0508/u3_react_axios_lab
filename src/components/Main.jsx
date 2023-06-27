import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import StarshipList from './StarshipList'
import Films from './Films'
import Characters from './Characters'
import Planets from './Planets'
import StarshipPage from './StarshipPage'
import FilmPage from './FilmPage'
import CharacterPage from './CharacterPage'
import PlanetPage from './PlanetPage'

export default function Main (props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/starships" element={<StarshipList starships={props.starships}/>} />
                <Route path="/starships/:id" element={<StarshipPage starships={props.starships}/>} />
                <Route path="/films" element={<Films films={props.films}/>} />
                <Route path="/films/:id" element={<FilmPage films={props.films}/>} />
                <Route path="/characters" element={<Characters characters={props.characters}/>} />
                <Route path="/characters/:id" element={<CharacterPage characters={props.characters}/>} />
                <Route path="/planets" element={<Planets planets={props.planets}/>} />
                <Route path="/planets/:id" element={<PlanetPage planets={props.planets}/>} />
            </Routes>
        </>
    )
}