import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import SearchMovies from './pages/SearchMovies'
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SearchMovies/>}/>
          <Route path='/movie' element={<Movie/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
