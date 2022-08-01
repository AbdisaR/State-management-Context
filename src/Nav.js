 import {useContext} from 'react';
 import './Nav.css';
 import {MovieContext} from './MovieContext';
 function Nav(){
    const [movies,setmovies] = useContext(MovieContext);
    return(
        <div className="nav">
            <h2>Logo here</h2>
            <p>Number of movies: {movies.length}</p>
        </div>
    );
 }

 export default Nav;