import { Route, Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import Home from './Home'

const Main = () => {
    return (
        <div className='routes-container'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SharshipList" element={<StarshipList />} />
            </Routes>
        </div>
    )
}

export default Main