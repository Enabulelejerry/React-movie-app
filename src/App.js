//import logo from './logo.svg';
//import './App.css';

import React, {useEffect, useState} from "react"
import Film from "./components/movie.js"
import './index.css';
const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=94a8895f6b9268e44e51618f31ae50d5"
const search_api ="https://api.themoviedb.org/3/search/movie?api_key=94a8895f6b9268e44e51618f31ae50d5&language=en-US&page=1&include_adult=false&query="

function App() {
  const[movies,setMovies] =  useState([]);
  const [searchTerm, setSearchTerm] = useState('')
   // const movies = ['1','2','3','4'];
   useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      
      setMovies(data.results)
    })
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(searchTerm){
      fetch(search_api + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      })

    }

      setSearchTerm("");
  
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  return (
    <>
   <header>

     <form onSubmit={handleOnSubmit}>
     <input className="search" type="text" placeholder="Search..."  value={searchTerm}  onChange={handleOnChange} />
       </form>
      
      
      </header>
    <div className="movie-container"> 

          
      {movies.length > 0 && movies.map((movie) => (
     <Film key={movie.id} {...movie} />
     ))}

    </div>
    </>
  );
}

export default App;



