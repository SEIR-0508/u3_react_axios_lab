export default function Characters (props) {
    return(
        <div className='grid'>
            {props.peoples.map((people)=> (
                <div key={people.id} className="card">
                    <h3>{people.name}</h3>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                    <p>Eye Color: {people.eye_color}</p>
                    <p>Birth Year: {people.birth_year}</p>
                    <p>Gender: {people.gender}</p>
                </div>
            ))}
        </div>
    )
}