import './index.css';
import {useState, useEffect} from 'react'
import fetchFromAPI from './api/Fetch'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import MovieList from './components/MovieList'
import PageTransition from './components/PageTransition'

function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('now_playing')
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      getSearchData(query, page);
    }
    else {
      getMovieData(filter, page);
    }
  }, [page, filter, query])

  const getMovieData = async (filter, page) => {
    // We want to construct a url using the filter and page that is passed in.
    const {results, total_pages} = await fetchFromAPI(`movie/${filter}?page=${page}`);
    
    // Set the movie list to the results returned from the promise.
    setMovies(results);
    // Set the total pages to the total_pages returned from the promise.
    setTotalPages(total_pages);
  }

  const getSearchData = async (query, page) => {
    // We want to construct a url using the query that the user enters in the search bar.
    const {results, total_pages} = await fetchFromAPI(`search/movie?query=${query}&page=${page}`);
    setMovies(results);
    setTotalPages(total_pages);
  }


  return (
    <div className="container">
      <Header setQuery={setQuery} setPage={setPage}/>
      <FilterBar filter={filter} setFilter={setFilter} setPage={setPage}/>
      <MovieList movies={movies}/>
      <PageTransition page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
