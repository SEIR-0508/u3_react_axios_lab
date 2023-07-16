import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <div className='Nav'>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/starships">Starships</NavLink>
          </li>
          <li>
            <NavLink to='/films'>Films</NavLink>
          </li>
          <li>
            <NavLink to='/people'>Characters</NavLink>
          </li>
          <li>
            <NavLink to='/planets'>Planets</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;