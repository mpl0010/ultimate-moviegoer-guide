/*
This represents each individual movie that is pulled from the API.
*/

import {useState} from 'react'
import Overview from './Overview'
import image from '../images/image.jpg'

// Pass in movie to be able to access movie data. Also to prop drill to pass along the data to the Overview Dialog.
// Pass in imageData to be able to construct our img src.
const Movie = ({movie, imageData}) => {
	// We want to keep track of whether or not the Overview dialog is open or not.
	const [overviewOpen, setOverviewOpen] = useState(false);

	// I noticed when a movie didn't have a poster, a 404 was returned. So I created my own poster.
	const moviePosterAvailable = (movie) => {
		let result = movie.poster_path;
		if(result) {
			result = `${imageData}${movie.poster_path}`;
		}
		else {
			result = `${image}`;
		}

		return result;
	}

	const toggleOverview = () => {
		setOverviewOpen(true);
	}
	
	return (
		<div className='movie' onClick={toggleOverview}>
			<img src={moviePosterAvailable(movie)} alt=''></img>
			<div className='movieTitle'>{movie.title}</div>
			{ overviewOpen ? <Overview overviewOpen={overviewOpen} setOverviewOpen={setOverviewOpen} movie={movie}/> : null }
		</div>
	)
}

export default Movie