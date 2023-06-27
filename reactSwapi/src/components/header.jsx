import youngling from '../assets/youngling.gif'
import Nav from './nav'
export default function Header () {
    return(
        <div>
            <img src={youngling} />
            <Nav/>
        </div>
    )
}