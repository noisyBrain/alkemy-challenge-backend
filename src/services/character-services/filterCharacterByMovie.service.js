const { Movie } = require('../../db');

const filterCharacterByAgeService = async (movieId) => {
    try {
        const character = await Movie.findAll({
            where: { movieId }
        });
        return character
    } catch (error) {
        return error
    };
};

module.exports = filterCharacterByAgeService;