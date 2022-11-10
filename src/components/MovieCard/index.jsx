/* eslint-disable react/prop-types */
import React from "react";
import "./MovieCard.css";
import useStyles from "./MovieCard.jss";

function MovieCard({ title, actors, posterUrl }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img className={classes.img} src={posterUrl} alt="banner" />
      <div className={classes.container}>
        <h4>
          <b>{title}</b>
        </h4>
        <p>{actors}</p>
      </div>
    </div>
  );
}

export default MovieCard;
