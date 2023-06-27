export default function Planets(props) {

 const { showPlanet } = props
    return(
        <div>
        {props.planets.map((planet, index) => (
       <div className="cardMain">
           <div key={index}
                 className="card"
                 onClick={()=>showPlanet(planet)}>
                
                   <h3>Name : {planet.name}</h3>
                  
                
                 </div>
            </div>     
        ))}
   </div>
    )
}