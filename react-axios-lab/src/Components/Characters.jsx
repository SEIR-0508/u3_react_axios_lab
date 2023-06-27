import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Characters = (props) => {

    let navigate = useNavigate()

    const showCharacter = (key) => {
        navigate(`${key}`)
    }

    return (
        <div className="starships-page">
            <Nav />
            <div className="grid-container">
                {
                    props.characters.map((character, key) => (
                        <div key={key} className='card' onClick={() => showCharacter(key)}>
                            <h2 className="card-title">{character.name}</h2>
                            <hr></hr>
                            <div className="card-data-container">
                                <p className="card-data card-data1">Height:</p>
                                <p className="card-data card-data2">{character.height}cm</p>
                                <p className="card-data card-data1">Hair Color:</p>
                                <p className="card-data card-data2">{character.hair_color}</p>
                                <p className="card-data card-data1">Eye Color:</p>
                                <p className="card-data card-data2">{character.eye_color}</p>
                                <p className="card-data card-data1">Gender:</p>
                                <p className="card-data card-data2">{character.gender}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Characters