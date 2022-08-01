import './App.css';
import Nav from './Nav'
import MovieList from './MovieList';
import {MovieProvider} from './MovieContext';
import AddMovie from './AddMovie';
import RemoveMovie from './RemoveMovie';
function App() {
  return (
    <MovieProvider>
    <div className="app">
      <Nav />
      <AddMovie />
      <RemoveMovie />
      <MovieList />
    </div>  
    </MovieProvider>
  );
}

export default App;
