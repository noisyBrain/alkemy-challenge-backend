const { Genre } = require('../../db');

const deleteGenreService = async (req) => {
    const { id } = req.params;
    try {
        const deletedGenre =  await Genre.destroy({
            where: { id }
        });
        return deletedMovie;
    } catch (error) {
        return error
    };
};

module.exports = deleteMovieService
