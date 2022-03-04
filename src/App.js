
import React from 'react'
import { useEffect } from 'react';


   const API_URL = 'https://www.omdbapi.com?apikey=6fac29e';

   const App = () => {


    const searchMovies = async (title) =>{
       
        const response=await fetch (`${API_URL}&s=${title}`)
        const data= await response.json();
        console.log(data.Search);
    }
    useEffect(()=>{
    searchMovies('Batman')
    },[])
    
    return (
      <div>
    
      </div>
    )
  }
  
  

export default App