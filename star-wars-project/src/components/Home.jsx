import Nav from "./Nav"
import Main from "./Main"

export default function Home(){
    return(
        <div className='home-page'>
        <nav>
        <h2>Star Wars</h2>
        <Nav/>
        </nav>
        <main>
            <h1>Welcome to the Star Wars Database!</h1>
            <img src="../images/justin-wilkens-5Fc8_2xys8E-unsplash.jpg" alt="chewbacca" />
        </main>
        </div>
    )
}