/*
I want to create a list that will contain the movies when they are fetched.
*/

import Movie from './Movie'

// Pass in movies to map each movie that was pulled from the fetch.
// Pass in imageData so that we can pass it to our Movie component for the img src.
const MovieList = ({ movies, imageData }) => {
	return (
		<div className="movieList">
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie} imageData={imageData}/>
			))}
		</div>
	)
}

export default MovieList