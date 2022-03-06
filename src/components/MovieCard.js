import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />


      <h4 className="title" format="YYYY">Lanzamiento: {movie.release_date}</h4>
      <h1 className="title">{movie.title}</h1>

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
