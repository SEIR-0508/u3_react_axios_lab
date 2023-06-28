import { Link } from 'react-router-dom'

const Nav = () => {

    return(
        <div className='navLinks'>
            <Link to="/">Home</Link>
            <Link to='/starship'>Starship List</Link>
            <Link to='/film'>Film list</Link>
            <Link to='/planet'>Planet List</Link>
            <Link to='/people'>People List</Link>
            
        </div>
    )
}

export default Nav