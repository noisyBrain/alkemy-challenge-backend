const filterMoviesByGenreService = require('../../services/movie-services/filterMoviesByGenre.service.js');

const filterMoviesByGenreController = async (req, res, next) => {
    const { genre, order } = req.query;
    try {
        // si llega order por query,
        // pasa al siguiente controlador
        if (order) return next();
        // llamamos al servicio
        const allMovies = await filterMoviesByGenreService(genre)
        // si el servicio retorna null, 
        // no se encontraron generos
        allMovies === null
        ? res.status(404).json({ msg: "Genres not found" })
        : res.status(200).json(allMovies);
    } catch (error) {
       next(error) 
    };
};

module.exports = filterMoviesByGenreController;
