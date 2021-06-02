/*
This component will consist of different ways to filter the movie list. I.e. Popular, Now Playing, Top Rated.
*/

const FilterBar = ({filter, setFilter, setPage}) => {
	// I probably could have done inline functions within the button components to save line space.
	const onClickNowPlaying = () => {
		setFilter('now_playing');
		setPage(1);
	}

	const onClickPopular = () => {
		setFilter('popular')
		setPage(1);
	}

	const onClickTopRated = () => {
		setFilter('top_rated')
		setPage(1);
	}

	return(
		<div className='filterBar'>
			<button className='nowPlaying' onClick={onClickNowPlaying}>Now Playing</button>
			<button className='Popular' onClick={onClickPopular}>Popular</button>
			<button className='Top Rated' onClick={onClickTopRated}>Top Rated</button>
		</div>
	)
}

export default FilterBar