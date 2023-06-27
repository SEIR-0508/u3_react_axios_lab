export default function Starship (props) {
    const { showShip } = props

    return (
        <div>
             {props.starships.map((starship, index) => (
                <div key={index}
                      className="card"
                       onClick={()=>showShip(starship)} >
                        <div>
                      
                        <h3>Product line : {starship.name}</h3>
                        
                        </div>
                      </div>
             ))}
        </div>
    )
}