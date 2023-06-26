import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/people">People</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/films">Films</Link>
            <Link to="/species">Species</Link>
            <Link to="/vehicles">Vehicles</Link>
            <Link to="starships">Starships</Link>
        </>
    )
}