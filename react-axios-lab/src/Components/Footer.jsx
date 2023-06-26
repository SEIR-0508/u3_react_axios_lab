import Starships from './Starships'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer-bar">
            <nav className="footer-items-container">
                <Link to="/" className="footer-item-button">Home</Link>
                <h3 className='footer-item'>Created by JB</h3>
            </nav>
        </div>
    )
}

export default Footer