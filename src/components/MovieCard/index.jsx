/* eslint-disable react/prop-types */
import React from "react";
import "./MovieCard.css";
import useStyles from "./MovieCard.jss";

function MovieCard({ id, title, actors, posterUrl }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img
        className={classes.img}
        src={posterUrl}
        alt="banner"
        data-testid={`poster-${id}`}
      />
      <div className={classes.container}>
        <h4>
          <b data-testid={`title-${id}`}>{title}</b>
        </h4>
        <p data-testid={`actors-${id}`}>{actors}</p>
      </div>
    </div>
  );
}

export default MovieCard;
