const getAllMoviesService = require('../../services/movie-services/getAllMovies.service');

const getAllMoviesController = async (req, res, next) => {
    const { title, genre, order } = req.query;
    try {
        // si existe alguna query, retornamos al proximo
        // controlador que realice el filtro que se busca
        if (title || genre || order) return next()
        // llamamos al servicio
        const allMovies = await getAllMoviesService();
        // si retorna null, no hay peliculas, de lo contrario,
        // retorna las que encuentre
        allMovies === null
        ? res.status(404).json({ msg: "Movies not found" })
        : res.status(200).json(allMovies);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAllMoviesController;
