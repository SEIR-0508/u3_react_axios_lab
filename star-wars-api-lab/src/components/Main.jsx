import { Route, Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'

const Main = () => {
    return (
        <div className='routes-container'>
            <Routes>
                <Route path="/SharshipList" element={<StarshipList />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Main