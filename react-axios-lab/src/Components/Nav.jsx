import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-bar">
            <nav className="nav-items-container">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/starships" className="nav-item">Starships</Link>
                <Link to="/characters" className="nav-item">Characters</Link>
                <Link to="/planets" className="nav-item">Planets</Link>
                <Link to="/films" className="nav-item">Films</Link>
            </nav>
        </div>
    )
}

export default Nav