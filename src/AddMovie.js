import {useState,useContext} from 'react';
import {MovieContext} from './MovieContext';
import './AddMovie.css';
function AddMovie(){
    const [movies,setmovies]=useContext(MovieContext);
    const [name, setname] = useState('');
    const [price, setprice] =useState('');

    const updateName = (e) => {
            setname(e.target.value);
    }
    const updatePrice = (e) => {
        setprice(e.target.value);
    }
    const addMovie = (e) => {
        e.preventDefault();
        setmovies(prev => [...prev,{name: name, price:'$'+price}])
    }
    return(
        <div className="add">
            <form onSubmit={addMovie} className="form">
                <input name="name" type="text" value={name} onChange={updateName} placeholder="Please Enter The Movie Name"/>
                <input name="price" type="number" min='0'  value={price} onChange={updatePrice} placeholder="Please Enter The Price"/>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
}

export default AddMovie;