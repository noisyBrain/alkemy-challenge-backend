const putMovieService = require('../../services/movie-services/putMovie.service');

const putMovieController = async (req, res, next) => {
    try {
        // Llamamos al servicio para actualizar la pelicula
        // le pasamos lo que venga por la request
        const updatedMovie = await putMovieService(req)
        // si lo que devuelve el servicio es null,
        // la pelicula no existe, retornamos esa respuesta,
        // de lo contrario, el servidor retornara la pelicula actualizada
        updatedMovie === null
        ? res.status(404).json({ msg: "Movie not found" })
        : res.status(200).json({ msg: "Updated successfully"});
    } catch (error) {
        next(error)
    };
};

module.exports = putMovieController;
