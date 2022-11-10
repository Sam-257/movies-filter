/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import useStyles from "./MovieList.jss";

function MovieList({ movies }) {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      {movies?.map((movie) => (
        <Link to="/movie" state={{ id: movie.id }} key={movie.id}>
          <MovieCard
            title={movie.title}
            actors={movie.actors}
            posterUrl={movie.posterUrl}
          />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
