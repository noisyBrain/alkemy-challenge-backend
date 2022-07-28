const { Character, Movie } = require('../../db');

const getDetailMovieService = async (id) => {
    try {
        const movies = await Movie.findByPk(id, {
            include: {
                model: Character,
                through: { 
                    attributtes:  ["name"]
                },
            },
        })
        return movies;
    } catch (error) {
        console.error(error)
    };
};

module.exports = getDetailMovieService;