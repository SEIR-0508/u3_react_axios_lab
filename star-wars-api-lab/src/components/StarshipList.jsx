// import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

const StarshipList = ({ starShips }) => {
    let navigate = useNavigate()
    const showShip = (starShip) => {
        navigate(`${starShip.id}`)
    }
    if (!starShips) {
        return <div> Loading. These are not the ships you're looking for. </div>
    } else {
        return (
            <div className='ships-list'>
                {starShips.map((starShip, index) => (
                    <div key={index} className='ship-card'>
                        <h4> Name: {starShip.name} </h4>
                        <p> Manufacturer: {starShip.manufacturer} </p>
                        <p> Credits: {starShip.cost_in_credits} </p>
                        {<button type='button' onClick={() => showShip(starShip)} key={starShip.id}> Details </button>}
                    </div>
                ))}
            </div>
        )
    }
}

export default StarshipList
