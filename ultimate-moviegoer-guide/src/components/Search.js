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

	// I needed to add a debouncer so that we aren't requesting data from the API for every keystroke in the Search bar.
	// It's probably better to pull this function out of here so that it can be used in other areas but since this is a small project I decided to leave it here.
	const debounce = (func, timeout = 500) => {
		let timer;
		return (...args) => {
			// Anytime a key is pressed we want to reset the timer so we clear it.
			clearTimeout(timer);
			timer = setTimeout(() => {func.apply(this, args); }, timeout);
		};
	}

	return(
		<form>
			<input 
			type='text' 
			placeholder='Search for a movie...'
			onInput={debounce(onInputEvent)}></input>
		</form>
	);
}

export default Search