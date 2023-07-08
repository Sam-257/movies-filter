import db from "../config/mysql.config.js";
import Response from "../domain/response.js";
import logger from "../util/logger.js";
import httpCodes from "../domain/httpCodes.js";
import moviesList from "./moviesList.js";

export const getMovies = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, fetching movies`);
  const query = 'SELECT * FROM movies ORDER BY createdAt';
  db.query(query, (err, result) => {
    if(err) {
      logger.error(err);
      res.status(httpCodes.INTERNAL_SERVER_ERROR.statusCode)
        .send(new Response(httpCodes.INTERNAL_SERVER_ERROR, 'Error Occured'));
      return;
    }
    if(result?.length === 0) {
      res.status(httpCodes.NO_CONTENT.statusCode)
        .send(new Response(httpCodes.NO_CONTENT, 'No movies found'));
    } else {
      res.status(httpCodes.OK.statusCode)
        .send(new Response(httpCodes.OK, 'Movies retrived Successfully', result));
    }
  })
};

export const getMovie = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, fetching movie`);
  const query = `SELECT * FROM movies WHERE id = "${req.params.id}"`
  db.query(query, (err, result) => {
    if(err) {
      logger.error(err);
      res.status(httpCodes.INTERNAL_SERVER_ERROR.statusCode)
        .send(new Response(httpCodes.INTERNAL_SERVER_ERROR, 'Error Occured'));
      return;
    }
    if(result?.length === 0) {
      res.status(httpCodes.NO_CONTENT.statusCode)
        .send(new Response(httpCodes.NO_CONTENT, 'Movie not found'));
    } else {
      res.status(httpCodes.OK.statusCode)
        .send(new Response(httpCodes.OK, 'Movie retrived Successfully', result));
    }
  })
};

// A function to insert the data. Won't be used!!
export const insertAllMovies = (req, res) => {
  logger.info(`${req.method} ${req.originalUrl}, Inserting movies`)
  moviesList.forEach(movie => {
    const {title, year, runtime, genres, director, actors, plot, posterUrl} = movie;
    const query = `INSERT INTO movies(title, year, runtime, genres, director, actors, plot, posterUrl) VALUES ('${title}', '${year}', '${runtime}', '${JSON.stringify(genres)}', '${director}', '${actors}', '${plot}', '${posterUrl}')`
    logger.info(query);
    db.query(query, (err, result) => {
      if(err) {
        logger.error(err);
        res.status(httpCodes.INTERNAL_SERVER_ERROR.statusCode)
          .send(new Response(httpCodes.INTERNAL_SERVER_ERROR, 'Error Occured'));
        return;
      }
    })
  });
  res.status(httpCodes.CREATED.statusCode)
  .send(new Response(httpCodes.CREATED, 'All records added'));
};