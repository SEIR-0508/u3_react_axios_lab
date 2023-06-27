import { Link } from 'react-router-dom'


export default function Nav () {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/starships">Starships</Link>
            <Link to="/films">Films</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/planets">Planets</Link>
        </>
    )
}