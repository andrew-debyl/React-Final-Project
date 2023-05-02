import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovies from "./pages/SearchMovies";
import Movie from "./pages/Movie";
import axios from "axios";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [ifFound, setIfFound] = useState(true);
  const [movieName, setMovieName] = useState("");

  async function fetchMovies(event) {
    if (event.key === "Enter" && event.target.value !== '') {
      const { data } = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=7ba85e40&s=" +
          event.target.value
      );
      setMovies(data.Search);
      setMovieName(event.target.value);
      if (data.Response === "True") {
        setIfFound(true);
      } else {
        setIfFound(false);
      }
    }
  }

  async function fetchMoviesOnClick(word) {
    const { data } = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=7ba85e40&s=" + word
    );
    setMovies(data.Search);
    setMovieName(word);
    if (data.Response === "True") {
      setIfFound(true);
    } else {
      setIfFound(false);
    }
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                fetchMovies={fetchMovies}
                fetchMoviesOnClick={fetchMoviesOnClick}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchMovies
                fetchMovies={fetchMovies}
                movies={movies}
                ifFound={ifFound}
                movieName={movieName}
                fetchMoviesOnClick={fetchMoviesOnClick}
              />
            }
          />
          <Route path="/search/:imdbID" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
