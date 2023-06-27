import { Link } from 'react-router-dom'

export default function Nav  () {
    return (
        <div className='nav-links'>
           <nav>
              <ul>
                <li>{<Link to='/'>Home</Link>}</li>
                <li>{<Link to='/starship'>Starship</Link>}</li>
                <li>{<Link to='/films'>Films</Link>}</li>
                <li>{<Link to='/planets'>Planets</Link>}</li> 
                <li>{<Link to='/characters'>Characters</Link>}</li>
             </ul>
        </nav> 
           
           
        </div>
    )
}