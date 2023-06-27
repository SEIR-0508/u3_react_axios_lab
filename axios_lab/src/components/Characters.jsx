export default function Characters(props) {
 
    const {showCharacter} = props 


    return (
        <div>
       
           {props.characters.map((character, index) => (
             <div key={index}
                 className="card"
                 onClick={()=>showCharacter(character)}>
                    <div>
                    <h3>Name : {character.name}</h3>
                  
                    </div>

                 </div>
        ))}
   </div>
    )

}