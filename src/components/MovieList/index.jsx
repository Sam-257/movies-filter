/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";
import "./MovieList.css";

function MovieList({ data }) {
  return (
    <div className="cardContainer">
      {data.map((item) => (
        <Link to="/movie" state={{ id: item.id }} key={item.id}>
          <MovieCard
            title={item.title}
            actors={item.actors}
            posterUrl={item.posterUrl}
          />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
