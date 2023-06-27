import { useSate, Ueeffect } from'react'


const StarshipList = (props) => {
    console.log(props)



    return (
        <div className="Starship-list">
            <h2></h2>
            {props.ships.map((starship) => (
                <div key={starship.name}
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