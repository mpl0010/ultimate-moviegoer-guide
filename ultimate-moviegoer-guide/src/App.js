import './index.css';
import {useState, useEffect} from 'react'
import fetchFromAPI from './api/Fetch'
import Header from './components/Header'
import MovieList from './components/MovieList'

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFromAPI = await fetchFromAPI();
      console.log(dataFromAPI);
    }
    
    getData()
  }, [])

  return (
    <div className="container">
      <Header />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
