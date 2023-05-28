/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import useStyles from "./MovieList.jss";

function MovieList({ movies }) {
  const classes = useStyles();
  return (
    <div data-testid="cards-container" className={classes.cardContainer}>
      {movies?.map((movie) => (
        <Link
          to="/movie"
          data-testid="movie-page-redirect"
          state={{ id: movie.id }}
          key={movie.id}
        >
          <MovieCard
            id={movie.id}
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
