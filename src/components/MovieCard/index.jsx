/* eslint-disable react/prop-types */
import React from "react";
import "./MovieCard.css";

function MovieCard({ title, actors, posterUrl }) {
  return (
    <div className="card">
      <img src={posterUrl} alt="banner" />
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{actors}</p>
      </div>
    </div>
  );
}

export default MovieCard;
