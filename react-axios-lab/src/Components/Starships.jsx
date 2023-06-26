import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Starships = (props) => {

    console.log(props)

    return (
        <div className="starships-page">
            <Nav />
            <div className="grid-container">
                {
                    props.starships.map((starship, index) => (
                        <div key={index} className='card'>
                            {console.log(index)}
                            <h2 className="card-title">{starship.name}</h2>
                            <hr></hr>
                            <div className="card-data-container">
                                <p className="card-data card-data1">Cost:</p>
                                <p className="card-data card-data2">{starship.cost_in_credits} Republic Credits</p>
                                <p className="card-data card-data1">Manufacturer:</p>
                                <p className="card-data card-data2">{starship.manufacturer}</p>
                                <p className="card-data card-data1">Passengers:</p>
                                <p className="card-data card-data2">{starship.passengers}</p>
                                <p className="card-data card-data1">Hyperdrive Rating:</p>
                                <p className="card-data card-data2">{starship.hyperdrive_rating}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Starships