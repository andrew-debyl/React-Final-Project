import React from "react";
import Header from "../components/Header";
import { SearchIcon } from "@heroicons/react/solid";
import "./SearchMovies.css";

function SearchMovies({fetchMovies}) {
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
    </div>
  );
}

export default SearchMovies;