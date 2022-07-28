const { Movie } = require('../../db');

const deleteMovieService = async (req) => {
    const { id } = req.params;
    try {
        const deletedMovie =  await Movie.destroy({
            where: { id }
        });
        return deletedMovie;
    } catch (error) {
        return error
    };
};

module.exports = deleteMovieService