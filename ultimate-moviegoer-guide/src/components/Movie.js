/*
This represents each individual movie that is pulled from the API.
*/

const Movie = ({movie}) => {
	return (
		<div className='movie'>{movie.title}</div>
	)
}

export default Movie