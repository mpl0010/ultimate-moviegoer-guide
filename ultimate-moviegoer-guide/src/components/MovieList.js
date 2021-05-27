import Movie from './Movie'

const MovieList = ({movies}) => {
	return (
		<div className="movieList">
			{movies.map((movie) => (
				<Movie key={movie.id} movie={movie}/>
			))}
		</div>
	)
}

export default MovieList