import Nav from './Nav'

const StarshipList = ({ starShips }) => {
    if (!starShips) {
        return <div> Loading. These are not the ships you're looking for. </div>
    } else {
        return (
            <div className='ships-list'>
                    <Nav />
                    {starShips.map((starShip, index) => (
                        <div key={index}
                        className="card">
                            <h4> Name: {starShip.name} </h4>
                            <p> Manufacturer: {starShip.manufacturer} </p>
                            <p> Credits: {starShip.cost_in_credits} </p>
                        </div>
                    ))}
                </div>
        )
    }
}

export default StarshipList
