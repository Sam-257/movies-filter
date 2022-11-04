import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "../../DB";
import "./Movie.css";

function Movie() {
  const { state } = useLocation();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(data.filter((item) => item.id === state.id)[0]);
  }, [state.id]);
  return (
    <>
      <div className="card1">
        <div className="imageContainer">
          <img className="img1" src={movie?.posterUrl} alt="posterUrl" />
        </div>
        <div className="dataContainer">
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
