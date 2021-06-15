/*
This component will consist of different ways to filter the movie list. I.e. Popular, Now Playing, Top Rated.
*/

const FilterBar = ({setFilter, setPage, setQuery}) => {
	// We want to handle the onClick by resetting the query string, setting the appropriate filter, and resetting the page count.
	const onClickFilter = (selectedFilter) => {
		setQuery('');
		setFilter(selectedFilter);
		setPage(1);
	}

	return(
		<div className='filterBar'>
			<button className='nowPlaying' onClick={() => onClickFilter('now_playing')}>Now Playing</button>
			<button className='popular' onClick={() => onClickFilter('popular')}>Popular</button>
			<button className='topRated' onClick={() => onClickFilter('top_rated')}>Top Rated</button>
		</div>
	)
}

export default FilterBar