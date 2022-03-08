import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import searchIcon from "./search.svg";
import Card from "./Card";

const API_URL = "https://www.omdbapi.com?apikey=6fac29e";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm]=useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>FILMORE</h1>
      <div className="search">
        <input placeholder="search for movies" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src={searchIcon} alt="search" onClick={() => searchMovies (searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
