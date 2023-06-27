import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CharacterDetails (props) {

    const [people, setPeople] = useState('')
    let { name } = useParams()

    useEffect(() => {
        let selectedPeople = props.peoples.find((people) => people.name === name)

        setPeople(selectedPeople)
    }, [props.peoples, name])

    return people ? (
        <div className='detail'>
            <div className='detail-header'>
                <h4>{people.name}</h4>
                <p>Hair Color: {people.hair_color}</p>
                <p>Skin Color: {people.skin_color}</p>
                <p>Eye Color: {people.eye_color}</p>
                <p>Birth Year: {people.birth_year}</p>
                <p>Gender: {people.gender}</p>
            </div>
        </div>
    )
: null}