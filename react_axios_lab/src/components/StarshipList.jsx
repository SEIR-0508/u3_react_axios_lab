import { useNavigate } from 'react-router-dom'


const StarshipList = (props) => {

   

  let navigate = useNavigate()
  const showShip = (starship) => {
    navigate(`${starship.name}`)
  }

  

    if(!props.starships){
        return <div>Loading..please wait.</div>
    }else {
    return (
        <div className="ship-grid">
            {
               props.starships.map((starship)=>(
                    <div key={starship.name} onClick={()=>showShip(starship)} className='ship'>
                        <h3>{starship.name}</h3>
                        
                    </div>
                ))
            }

        </div>
    )
}}

export default StarshipList