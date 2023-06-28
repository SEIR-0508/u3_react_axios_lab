import { useState, useEffect } from "react"
import { films_url } from "../global"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Films = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {
        const getFilms = async () => {
            const res = await axios.get(films_url)
            console.log(res.data.results)
            setFilms(res.data.results)
        }
        getFilms()
    }, [])
    console.log(films)

    const navigate = useNavigate()

    const showFilms = (key) => {
        navigate(`${key}`)
    }

    return films.length != 0 ? (
        <div>
            <h2>Film List</h2>
            <div className="grid">
                {
                    films.map((film, key) => (
                        <div key={key+1} onClick={() => {showFilms(key+1)}} className="card">
                            <h3>{film.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>

    ) : <h2>Finding Films...</h2>
}

export default Films