const sortMoviesByCreateService = require('../../services/movie-services/sortMoviesByCreate.service.js');

const sortMoviesByCreateController = async (req, res, next) => {
  try {
    const sortMovies = await sortMoviesByCreateService(req)
    res.status(200).json(sortMovies);
  } catch (error) {
    next(error)    
  };
};

module.exports = sortMoviesByCreateController;
