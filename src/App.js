
import React from 'react'
import { useEffect } from 'react';
import searchIcon from './search.svg'


   const API_URL = 'https://www.omdbapi.com?apikey=6fac29e';

   const App = () => {


    const movie1={
        
            "Title": "Batman: The Killing Joke",
            "Year": "2016",
            "imdbID": "tt4853102",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        
    }

    const searchMovies = async (title) =>{
       
        const response=await fetch (`${API_URL}&s=${title}`)
        const data= await response.json();
        console.log(data.Search);
    }
    useEffect(()=>{
    searchMovies('Batman')
    },[])
    
    return (
      <div className='app'>
    <h1>FILMORE</h1>
    <div className="search">
        <input placeholder='search for movies' />
        <img src={searchIcon} alt="search" onClick={()=>{}}/>
        </div>
        <div className="container">
            <div className="movie">
                <p>{movie1.Year}</p>
                <img src={movie1.Poster} alt={movie1.Title} />
                <div><span>{movie1.Type}</span></div>
                </div>
                
            </div>
      </div>
    )
  }
  
  

export default App