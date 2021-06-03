/*
This will contain the Next page and Previous page buttons for the user to transition
between the movie list.
*/

import PropTypes from 'prop-types'

const PageTransition = ({page, setPage, totalPages}) => {
	const onClickNextPage = () => {
		setPage(page + 1);
	}

	const onClickPreviousPage = () => {
		setPage(page - 1);
	}

	return(
		<div className='pageTransition'> 
			<button disabled={page === 1} onClick={onClickPreviousPage}>Previous Page</button>
			<h1>{page}</h1>
			<button disabled={page === totalPages} onClick={onClickNextPage}>Next Page</button>
		</div>
	)
}

// When we want to make sure the prop that is getting passed in is a certain type, we can use proptypes as a validator.
PageTransition.propTypes = {
	page: PropTypes.number,
	setPage: PropTypes.func,
	totalPages: PropTypes.number,
}

export default PageTransition