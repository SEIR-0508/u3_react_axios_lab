import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-links">
            <Link class="nav" to="/"> Home </Link>
            <Link class="nav" to="/starships"> Starships </Link>
            <Link class="nav" to="/films"> Films </Link>
            <Link class="nav" to="/planets"> Planets </Link>
            <Link class="nav" to="/characters"> Characters </Link>
        </div>
    )
}

export default Nav