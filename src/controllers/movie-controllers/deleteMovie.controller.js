const deleteMovieService = require('../../services/movie-services/deleteMovie.service');

const deleteMovieController = async (req, res, next) => {
    try {
        // Llamamos al servicio
        const deletedMovie = await deleteMovieService(req);
        // si retorna 0, devolvemos que no hubo coincidencias
        // si retorna 1, devolvemos que fue eliminado
        deletedMovie === 0
        ? res.status(404).json({ msg: "Movie not found" })
        : res.status(200).json({ msg: "Movie deleted" });
    } catch (error) {
        next(error)
    };
};

module.exports = deleteMovieController;
