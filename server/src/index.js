import express from 'express';
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';

import Response from './domain/response.js';
import logger from './util/logger.js';
import httpCodes from './domain/httpCodes.js';

import moviesRoute from './routes/movies.route.js';
import { insertAllMovies } from './controller/movies.controller.js';

dotenv.config();
const app = express();
app.use(cors({origin: '*'}));
app.use(express.json())

const PORT = process.env.SERVER_PORT || 8080;

app.use('/movies', moviesRoute);
app.get('/test', insertAllMovies);
app.get('/', (req, res) => { 
  res.send(new Response('OK', 'Welcome To server'));
});
app.all('*', (req, res) => { 
  res.status(httpCodes.NOT_FOUND.statusCode)
    .send(new Response(httpCodes.NOT_FOUND, 'API not found'));
})


app.listen(PORT, () => logger.info(`Server running on ${ip.address()}:${PORT}`));