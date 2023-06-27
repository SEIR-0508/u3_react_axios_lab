import StarshipList from "./StarshipList"
import Home from "./Home"
import { Route, Routes } from "react-router-dom"

const Main = (props) => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Starshiplist'element={<StarshipList ships={props.ships}/>}/>
        </Routes>
    )
}



export default Main