import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import SearchMovies from './pages/SearchMovies'
import Movie from "./pages/Movie";
import axios from 'axios'
import { useEffect, useState } from "react";

function App() {
  const [movieTitle, setMovieTitle] = useState('')

  let link = "star"
  //"http://www.omdbapi.com/?i=tt3896198&apikey=7ba85e40&s=" + movieTitle;

  async function fetchMovies(event){
    if (event.key === 'Enter'){
      const {data} = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=7ba85e40&s="+event.target.value)
      console.log(data)
    }
    
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={() => <SearchMovies fetchMovies={fetchMovies}/>}/>
          <Route path='/movie' element={<Movie/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;