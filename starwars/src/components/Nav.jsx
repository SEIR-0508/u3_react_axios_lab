import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
      const [isDropdownOpen, setIsDropdownOpen] = useState(false)

      const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen)
      }

      return (
      <div className='nav-links'>
            <div className='logo'>
                  <img
                  className='starLogo'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png'
                  alt='Star Wars Logo'
                  />
            </div>
            <div>
                  <h1>Star Wars Info...</h1>
            </div>
            <div className='nav-dropdown'>
                  <button className='dropdown-button' onClick={toggleDropdown}>
                  Menu
                  </button>
                  {isDropdownOpen && (
                  <div className='dropdown-content'>
                        <Link className='nav-link' to='/'>
                        Home
                        </Link>
                        <Link className='nav-link' to='/starship'>
                        Starships
                        </Link>
                        <Link className='nav-link' to='/films'>
                        Films
                        </Link>
                        <Link className='nav-link' to='/planets'>
                        Planets
                        </Link>
                        <Link className='nav-link' to='/characters'>
                        Characters
                        </Link>
                        <Link className='nav-link' to='/vehicles'>
                        Vehicles
                        </Link>
                        <Link className='nav-link' to='/species'>
                        Species
                        </Link>
                  </div>
                  )}
            </div>
      </div>
      )
}

export default Nav
