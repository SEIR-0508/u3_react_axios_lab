

const Characters = (props) => {
  return (
    <div className="gallery">
      {
        props.characters.map((character) => (
          <div key={character.id} className="card">
            <h2>{character.name}</h2>
            <p>Height in cm: {character.height}</p>
            <p>Mass in kg: {character.mass}</p>
            <p>Hair Color: {character.haircolor}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Gender: {character.gender}</p>
            <p>DOB: {character.birth_year}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Characters