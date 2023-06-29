
import { useNavigate } from 'react-router-dom'


const StarshipList = (props) => {
    console.log(props)


    let navigate = useNavigate()

    const showShip = (key) => {
        navigate (`${key}`)
    }


    return (
        <div className="Starship-list">
            <h1>Starships</h1>
            {props.ships.map((starship, key) => (
                <div key={key} onClick={()=>showShip(key)}
                    className="card">

                    <h2>{starship.name}</h2>
                    <p>{starship.model}</p>
                    <p>{starship.manufacturer}</p>
                    <p>{starship.length}</p>
                    <p>{starship.max_atmosphering_speed}</p>
                    <p>{starship.crew}</p>
                    <p>{starship.passengers}</p>
                    

                
                </div>
            ))}


        </div>
    )

}
  

export default StarshipList