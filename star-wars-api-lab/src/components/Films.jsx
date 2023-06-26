const Films = ({films}) => {
    console.log(films)
    if (!films) {
        return <div> Loading. These are not the films you're looking for. </div>
    } else {
        return (
            <div className='films-list'>
                {films.map((film, index) => {
                    return (
                        <div key={index}>
                        <h2> {film.title} </h2>
                        <p> Release date: {film.release_date} </p>
                    </div>
                        )
                })}
            </div>
        )
    }
}

export default Films
