import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-page">
            <Nav />
            <div className="page-instructions">
                <h1 className='page-title'>Welcome to my Star Wars Page!</h1>
            </div>
        </div>
    )
}

export default Home