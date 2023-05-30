import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import useStyles from "./Movie.jss";

function Movie() {
  const classes = useStyles();
  const { state } = useLocation();
  const [movie, setMovie] = useState({});
  const { data } = useQuery("movies-list", () => {
    return axios.get("http://localhost:8080/movies");
  });

  useEffect(() => {
    if (!data) return;
    setMovie(data.data.filter((item) => item.id === state.id)[0]);
  }, [data, state.id]);
  return (
    <>
      <div className={classes.card1}>
        <div className={classes.imageContainer}>
          <img
            className={classes.img1}
            src={movie?.posterUrl}
            alt="posterUrl"
          />
        </div>
        <div className={classes.dataContainer}>
          <h1>{movie?.title}</h1>
          <h5>{movie?.year}</h5>
          <p>{movie?.plot}</p>
          <p>
            <b>Director</b>: <i>{movie?.director}</i>
          </p>
          <p>
            <b>Cast</b>: <i>{movie?.actors}</i>
          </p>
          <p>
            <b>Runtime</b>: <i>{movie?.runtime} min</i>
          </p>
          <p>
            <b>Genre</b>: {movie?.genres?.toString()}
          </p>
        </div>
      </div>
      <Link to="/"> Go Back</Link>
    </>
  );
}

export default Movie;
