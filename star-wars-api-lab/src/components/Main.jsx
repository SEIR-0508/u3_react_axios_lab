import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import StarshipList from "./StarshipList"
import StarshipDetails from './StarshipDetails'
import Home from "./Home"
import Films from "./Films"
import axios from "axios"
import { BASE_URL } from "../globals"

const Main = () => {
    // GET STARSHIPS INFO
    const [starShips, setShips] = useState([])
    const [starShip, setShip] = useState(null)
    useEffect(() => {
        const getShips = async () => {
            const response = await axios.get(`${BASE_URL}/starships`)
            setShips(response.data.results)
        }
        getShips()
    }, [])
    // GET FILMS INFO
    const [films, setFilms] = useState([])
    useEffect(() => {
        const getFilms = async () => {
            const response = await axios.get(`${BASE_URL}/films`)
            setFilms(response.data.results)
        }
        getFilms()
    }, [])

    return (
        <div className='routes-container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/starships'
                    element={<StarshipList starShips={starShips} />}
                />
                {<Route path='/starships/:id' element={<StarshipDetails starShip={starShip} />} />}
                <Route path='/films' element={<Films films={films} />} />
            </Routes>
        </div>
    )
}

export default Main
