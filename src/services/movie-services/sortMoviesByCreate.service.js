const { Movie } = require('../../db');

const sortMoviesByCreateService = async (req) => {
  const { order } = req.query;
  try {
    if (order === 'ASC') {
      const ascMovies = await Movie.findAll({
        order: [[ 'released', 'ASC' ]]
      });
      return ascMovies
    };
    if (order === 'DESC') {
      const descMovies = await Movie.findAll({
        order: [[ 'released', 'DESC' ]]
      });
      return descMovies
    };
  } catch (error) {
    return error
  };
};

module.exports = sortMoviesByCreateService;
