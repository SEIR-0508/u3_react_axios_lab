import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react'
import { BASE_URL } from '../global'
import axios from 'axios'
import Home from './Home'
import StarshipList from './StarshipList'
import Films from "./Films"
import Planets from "./Planets"
import Characters from "./Characters"
import ShipDetails from "./StarshipPage"


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
            </Routes>
        </div>
    )
}

export default Main