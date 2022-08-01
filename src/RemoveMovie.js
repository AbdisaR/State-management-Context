import {useContext,useState} from 'react';
import {MovieContext} from './MovieContext';
import './RemoveMovie.css';
function RemoveMovie(){
    const[movies,setmovies] = useContext(MovieContext);
    const[name, setName]= useState(''); 
    const updateName = e => {
        setName(e.target.value);
    }
    const removeMovie =(e)=>{
        e.preventDefault();
        let newMovies = movies;
        for (var i =newMovies.length - 1; i >= 0; --i) {
            if (newMovies[i].name === name) {
                newMovies.splice(i,1);
            }
        }
        console.log(newMovies);
        setmovies(movies.splice(0,movies.length, ...newMovies));
    }
    return(
        <div className="remove">
            <form onSubmit={removeMovie} className="form">
                <input  className="ok"type="text" name="moviename" placeholder="Please Enter the movie name" onChange={updateName} value={name}/>
                <button type="submit">Remove Movie</button>
            </form>
        </div>
    );
}

export default RemoveMovie;