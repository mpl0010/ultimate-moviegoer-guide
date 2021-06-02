/*
This is the header of the website. This will contain text and a Search bar component.
*/

import Search from './Search'

const Header = ({setQuery, setPage}) => {
	// We're going to prop drill to pass along our setSearch.
	return (
		<header className="header">
			<h1>Ultimate Moviegoer Guide</h1>
			<Search setQuery={setQuery} setPage={setPage}/>
		</header>
	)
}

export default Header