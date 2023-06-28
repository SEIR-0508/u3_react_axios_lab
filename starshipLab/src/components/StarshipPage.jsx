import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'




const StarshipPage = () =>{


    return(
        <div className='IndividualShip'>
        {
            ships.map((ship, key) =>  {
                <div key={key}>

            <h1>{ship.name}</h1>


                </div>
        })

        }

            <Link to='/StarshipList'>return to starship list</Link>
        </div>
    )
}

export default StarshipPage