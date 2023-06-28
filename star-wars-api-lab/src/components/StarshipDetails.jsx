import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const StarshipDetails = ({ starShips }) => {

    const [starShip, setStarship] = useState(null)
    let { name } = useParams()

    useEffect(() => {
        let selectedStarship = starShips.find((starShip) => starShip.name === name)
        if (selectedStarship) {
            setStarship(selectedStarship)
        }
    }, [starShips, name])
    if (!starShip) {
        return <div> Loading.There is no such ship. </div>
    } else {
        return (
            <div>
                    <div className="starShip-detail">
                        <h1> {starShip.name} </h1>
                        <h3> {starShip.manufacturer} </h3>
                        <h3> Max atmosphering speed: {starShip.max_atmosphering_speed} </h3>
                    </div>
                </div>
            )
        }
    }

export default StarshipDetails