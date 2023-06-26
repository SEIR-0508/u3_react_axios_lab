import { Link } from 'react-router-dom'

export default function Nav(){
    return(
    <div className='nav'>
        <div className='nav-link'>
        <Link to='/'>Home</Link>
        </div>
        <div className='nav-link'>
        <Link to='/starship'>Starships</Link>
        </div>
        <div className='nav-link'>
        <Link to='/film'>Films</Link>
        </div>
        <div className='nav-link'>
        <Link to='/planet'>Planets</Link>
        </div>
        <div className='nav-link'>
        <Link to='/character'>Characters</Link>
        </div>
        <div className='nav-link species-link'>
        <Link to='/species'>Species</Link>
        </div>
    </div>
    )  
}