/*
This component will be for the Search bar. A user can enter a query into the Search to find
a specific movie within the database.
*/

const Search = ({setQuery, setPage}) => {
	// We want an input event to set our query information when it is entered. We also want the page to reset to 1.
	const onInputEvent = e => {
		setQuery(e.target.value);
		setPage(1);
	}

	return(
		<form>
			<input 
			type='text' 
			placeholder='Search for a movie...'
			onInput={onInputEvent}></input>
		</form>
	);
}

export default Search