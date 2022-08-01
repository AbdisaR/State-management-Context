import {useState,createContext} from 'react';

export const MovieContext=createContext();

export const MovieProvider = (props) => {
    const [movies,setmovies] =useState([
        {
          name: "Harry Potters",
          price: '$'+12
        },
        {
          name: "Game of Thrones",
          price: '$'+ 45
        },
        {
          name: "Friends",
          price: '$' + 56,
        }
      ])
    return(
        <MovieContext.Provider value={[movies,setmovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}