import StarshipList from "./StarshipList"
import Home from "./Home"
import Characters from "./Characters"
import Films from "./Films"
import Planets from "./Planets"
import StarshipPage from "./StarshipPage"


import { Route, Routes } from "react-router-dom"

const Main = (props) => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Starshiplist'element={<StarshipList ships={props.ships}/>}/>
            <Route path='/Characters' element={<Characters character={props.people}/>}/>
            <Route path='/Films' element={<Films film={props.film}/>}/>
            <Route path='/Planets' element={<Planets planet={props.planet}/>}/>
            <Route path='/StarshipPage' element={<StarshipPage/>}/>

        </Routes>
    )
}



export default Main