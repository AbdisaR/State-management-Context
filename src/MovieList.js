import {useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';
    function MovieList(){
       const [movies,setmovies]= useContext(MovieContext);
        return(
            <div>
                {
                 movies.map (movie => (
                        <Movie name={movie.name} price={movie.price}/>
                ))
                }
            </div>
        );
    }; 

    export default MovieList;