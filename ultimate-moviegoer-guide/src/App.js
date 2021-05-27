import './index.css';
import {useState} from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Mortal Combat',
    },
    {
      id: 2,
      title: 'Breach',
    },
    {
      id: 3,
      title: 'Harry Potter',
    }
  ])

  return (
    <div className="container">
      <Header />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
