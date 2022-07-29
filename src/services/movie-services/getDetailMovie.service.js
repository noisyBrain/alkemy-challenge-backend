const { Character, Movie } = require('../../db');

const getDetailMovieService = async (id) => {
    try {
        const movie = await Movie.findByPk(id, {
            include: {
                model: Character,
                through: { 
                    attributtes:  ["name"]
                },
            },
        })
        if (!movie) {
          movie.error = { msg: "Movie not found" }
          return movie;
        };
        return movie;
    } catch (error) {
        return error
    };
};

module.exports = getDetailMovieService;
