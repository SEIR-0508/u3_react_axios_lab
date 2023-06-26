const StarshipList = (props) => {
    console.log(props)
    if (!props.starShips) {
        return <div> Loading. These are not the ships you're looking for. </div>
    } else {
        return (
            <div className="grid">
                <h2> I am Starships List </h2>
                <ul className="ships-list">
            {props.starShips.map((starShip, index) => (
                <li key="index"> {starShip.name} </li>
                ))}
                </ul>
        </div>
    )
}
}

export default StarshipList