import Nav from "./Nav"
import React from 'react'

const Header = () => {
    return(
        <div className="header">
            <div>
                <h1>STARWARS</h1>
                <Nav />
            </div>
        </div>
    )
}

export default Header