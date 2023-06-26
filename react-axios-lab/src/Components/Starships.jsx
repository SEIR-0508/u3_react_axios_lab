import Nav from './Nav'
import Footer from './Footer'
import StarshipItem from './StarshipItem'
import { BASE_URL } from '../globals'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Starships = (props) => {
    
    let navigate = useNavigate()

    const showShip = (key) => {
        navigate(`${key}`)
    }

    return (
        <div className="starships-page">
            <Nav />
            <div className="grid-container">
                {
                    props.starships.map((starship, key) => (
                        <div key={key} className='card' onClick={() => showShip(key)}>
                            <h2 className="card-title">{starship.name}</h2>
                            <hr></hr>
                            <div className="card-data-container">
                                <p className="card-data card-data1">Cost:</p>
                                <p className="card-data card-data2">{starship.cost_in_credits} Republic Credits</p>
                                <p className="card-data card-data1">Manufacturer:</p>
                                <p className="card-data card-data2">{starship.manufacturer}</p>
                                <p className="card-data card-data1">Passengers:</p>
                                <p className="card-data card-data2">{starship.passengers}</p>
                                <p className="card-data card-data1">Hyperdrive Rating:</p>
                                <p className="card-data card-data2">{starship.hyperdrive_rating}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Starships