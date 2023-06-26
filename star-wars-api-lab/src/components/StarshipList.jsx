const StarshipList = (props) => {
    console.log(props)
    if (!props.ships) {
        return <div> Loading. These are not the ships you're looking for. </div>
    } else {
        return (
            <div className="grid">
            <h2> I am Starships List </h2>
            {props.ships.map((ship) => (
                <p> {ship.name} </p>
                ))}
        </div>
    )
}
}

export default StarshipList