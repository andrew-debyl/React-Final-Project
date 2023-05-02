import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import noImg from '../assets/noimage.png'
import axios from 'axios'
import './Movie.css'

function Movie() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState([])

  async function getInfo() {
    const movie = await axios.get(`https://www.omdbapi.com/?apikey=4cfe7eb4&i=`+imdbID)
    setMovie(movie.data)
  }

  useEffect(() => {
    getInfo()
  },[])

  return (
    <div>
      <Header bool={false} />
      <div className="movie--wrapper">
        <div className="movie">
          <div className="movie__img--wrapper">
            {movie.Poster === "N/A" ? (
              <img className="body__img" src={noImg} alt="" />
            ) : (
              <img className="body__img" src={movie.Poster} alt="" />
            )}
          </div>
          <div className="movie__description--wrapper">
            <h1 className="movie__title">{movie?.Title}</h1>
            <div className="movie__info">
              <h3>Movie Info</h3>
              <p>{movie?.Plot}</p>
              <p><b>Duration:</b> {movie.Runtime}</p>
              <p><b>Released:</b> {movie?.Released}</p>
              <p><b>Director:</b> {movie?.Director}</p>
              <p><b>Actors:</b> {movie?.Actors}</p>
              <p><b>Genre:</b> {movie?.Genre}</p>
              <p><b>Language:</b> {movie?.Language}</p>
              <p><b>Rated:</b> {movie?.Rated}</p>
              <p><b>Rating:</b> {movie.imdbRating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
