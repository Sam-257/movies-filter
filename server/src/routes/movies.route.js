import express  from "express";
import { getMovies, getMovie } from "../controller/movies.controller.js";

const moviesRoute = express.Router();

moviesRoute.route('/')
  .get(getMovies);

  moviesRoute.route('/:id')
  .get(getMovie);

export default moviesRoute;