const { Character, Genre, Movie } = require('../../db');

const sortMoviesByCreateService = async (req) => {
  const { order } = req.query;
  try {
    if (order === 'ASC') {
      // ordenamos ascendentemente
      // incluimos las tablas asociadas
      const ascMovies = await Movie.findAll({
        order: [[ 'released', 'ASC' ]],
        include: [Character, Genre]
      });
      return ascMovies
    };
    if (order === 'DESC') {
      // ordenamos descendentemente
      // incluimos las tablas asociadas
      const descMovies = await Movie.findAll({
        order: [[ 'released', 'DESC' ]],
        include: [Character, Genre]
      });
      return descMovies
    };
  } catch (error) {
    return error
  };
};

module.exports = sortMoviesByCreateService;
