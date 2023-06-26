import {Route, Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'
import FilmList from './FilmList'
import PlanetList from './PlanetList'
import PeopleList from './PeopleList'

const Main = () => {
    return(
    <div className='routes-container'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/starship" element={<StarshipList />}/>
            <Route path="/film" element={<FilmList />} />
            <Route path="/planet" element={<PlanetList />} />
            <Route path='/people' element={<PeopleList />} />
        </Routes>
    
    </div>
    )
}

export default Main