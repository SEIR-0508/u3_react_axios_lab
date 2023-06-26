import { Link } from 'react-router-dom'

const Nav = () => {
      return (
            <div className='nav-links'>
                  <div className='logo'>
                        <img className='starLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
                  </div>
                  <Link className='nav-link' to='/'>Home</Link>
                  <Link className='nav-link' to='/starship'>Starships</Link>
                  <Link className='nav-link' to='/films'>Films</Link>
                  <Link className='nav-link' to='/planets'>Planets</Link>
                  <Link className='nav-link' to='/characters'>Characters</Link>
                  <Link className='nav-link' to='/vehicles'>Vehicles</Link>
                  <Link className='nav-link' to='/species'>Species</Link>
            </div>
      )
}

export default Nav