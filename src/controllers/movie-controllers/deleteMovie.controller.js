const deleteMovieService = require('../../services/movie-services/deleteMovie.service');

const deleteMovieController = async (req, res, next) => {
    try {
        const deletedMovie = await deleteMovieService(req);
        res.status(200).json({ msg: "Movie deleted" });
    } catch (error) {
        next(error)
    };
};

module.exports = deleteMovieController;