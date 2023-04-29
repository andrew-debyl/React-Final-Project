import React from "react";
import Header from "../components/Header";
import { SearchIcon } from "@heroicons/react/solid";
import "./Home.css";
import movieIcon from '../assets/undraw_movie.svg'

function Home() {
  return (
    <div>
      <Header bool={true} />
      <div className="main__wrapper">
        <h1 className="main__title1">Canada's most awarded movie platform</h1>
        <h2 className="main__title2">
          Find your favorite movie's with{" "}
          <span className="purple">FilmFinder</span>
        </h2>
        <div className="nav__header-input--wrapper">
          <input
            id="search-bar"
            type="text"
            placeholder="Search by Keyword"
            className="nav__search-bar"
            /*onkeypress="onEnter(event)"*/
          />
          <div className="nav__header--clicker" /*onclick="onClick()"*/>
            <SearchIcon className="searchIcon" />
          </div>
        </div>
        <div className="movie--img-container">
          <img src={movieIcon} alt="" className="movie--img"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
