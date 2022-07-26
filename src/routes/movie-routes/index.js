const validateToken = require('../../middlewares/validateToken');
const getAllMoviesController = require('../../controllers/movie-controllers/getAllMovies.controller');
const postMovieController = require('../../controllers/movie-controllers/postMovie.controller');
const getDetailMovieController = require('../../controllers/movie-controllers/getDetailMovie.controller');
const putMovieController = require('../../controllers/movie-controllers/putMovie.controller');
const deleteMovieController = require('../../controllers/movie-controllers/deleteMovie.controller');
const sortMoviesByCreateController = require('../../controllers/movie-controllers/sortMoviesByCreate.controller.js');
const getMovieByTitleController = require('../../controllers/movie-controllers/getMovieByTitle.controller.js');
const filterMoviesByGenreController = require('../../controllers/movie-controllers/filterMoviesByGenre.controller.js');

const router = require('express').Router()

// acordarse de agregar las validaciones en todas las rutas menos en el get All
router.get('/:id', validateToken, getDetailMovieController);
router.get('/', 
  getAllMoviesController, 
  getMovieByTitleController, 
  filterMoviesByGenreController, 
  sortMoviesByCreateController 
);
router.post('/', validateToken, postMovieController);
router.put('/:id',validateToken, putMovieController);
router.delete('/:id', validateToken, deleteMovieController);

module.exports = router;
