import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav-links">

            <Link to="/">Home</Link>
            <Link to="/StarshipList">Starships</Link>
            <Link to="/Characters">Characters</Link>
            <Link to="/Films">Films</Link>
            <Link to="/Planets">Planets</Link>
            


        </div>

    )
}

export default Nav