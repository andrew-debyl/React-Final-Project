import React from "react";
import Header from "../components/Header";
import { SearchIcon } from "@heroicons/react/solid";
import "./SearchMovies.css";
import noImg from "../assets/noimage.png";
import { Link } from "react-router-dom";

function SearchMovies({ fetchMovies, movies, ifFound, movieName }) {
  function moviesHTML(movies) {
    return (
      <div className="body__movie" key={movies.imdbID}>
        <Link to={`/search/${movies.imdbID}`} className="link__style">
          <div className="body__img--wrapper">
            {movies.Poster === "N/A" ? (
              <img className="body__img" src={noImg} alt="" />
            ) : (
              <img className="body__img" src={movies.Poster} alt="" />
            )}
          </div>
        </Link>
        <Link to={`/search/${movies.imdbID}`} className="link__style">
          <div className="body__about--wrapper">
            <h3 className="body__about">
              {movies.Title} - {movies.Year}
            </h3>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Header bool={false} />
      <section id="nav__bar">
        <nav className="nav__container">
          <div className="nav__header--search">
            <h1 className="nav__title">Browse Our Movies</h1>
            <div className="nav__header-input--wrapper">
              <input
                id="search-bar"
                type="text"
                placeholder="Search by Keyword"
                className="nav__search-bar"
                onKeyDown={fetchMovies}
              />
              <div className="nav__header--clicker" /*onclick="onClick()"*/>
                <SearchIcon className="searchIcon" />
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section id="body">
        <div className="body__container">
          {ifFound ? (
            movies.map((movie) => moviesHTML(movie)).slice(0, 6)
          ) : (
            <div className="error-message">
              <div className="error">
                <h1 className="error--title">
                  Unfortunately there are no movies found with the name{" "}
                  <span className="error--movie-name">{movieName}</span> in our
                  database.
                </h1>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default SearchMovies;
