const { Movie } = require('../../db');

const filterCharacterByMovieService = async (movies) => {
    try {
        const movie = await Movie.findByPk(movies);
        if (movie === null) {
            return movie
        };
        const movie_characters = await movie.getCharacters({
          attributes: {
            exclude: ["id"]
          },
        });
        return movie_characters;
    } catch (error) {
        return error
    };
};

module.exports = filterCharacterByMovieService;
