/*
I wanted to separate the fetch functionality from the components because I felt
like it didn't really belong. 
I don't see fetch as a component, more-so an action that a component might take.
*/

// Each fetch will require these two pieces of the url. Placing them in a variable seems cleaner.
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=9fb5d4f3d51341be07d30d72bcd86ade';

const fetchFromAPI = async (formattedUrl) => {
	// We want to use our constructed url to fetch the data needed.
	const response = await fetch(`${baseUrl}${formattedUrl}&${apiKey}`);
	
	// If the response isn't ok, we throw an error with the status.
	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}

	// The respose was ok so we return the response as a JSON object.
	const data = await response.json();
	return data;
}

export default fetchFromAPI