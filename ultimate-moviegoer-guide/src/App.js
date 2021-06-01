import './index.css';
import {useState, useEffect} from 'react'
import fetchFromAPI from './api/Fetch'
import Header from './components/Header'
import MovieList from './components/MovieList'
import PageTransition from './components/PageTransition'

function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('popular')

  useEffect(() => {
    getMovieData(filter, page);
  }, [page])

  const getMovieData = async (filter, page) => {
    const {results, total_pages} = await fetchFromAPI(filter, page);
      setMovies(results);
      setTotalPages(total_pages);
  }


  return (
    <div className="container">
      <Header />
      <MovieList movies={movies}/>
      <PageTransition page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
}

export default App;
