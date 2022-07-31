const getMovieByTitleService = require('../../services/movie-services/getMovieByTitle.service.js');

const getMovieByTitleController = async (req, res, next) => {
    const { genre, order, title } = req.query;
    try {
        // si llega title por query
        if (genre || order) return next();
        // llamamos al servicio pasandole el titulo como filtro
        const movie = await getMovieByTitleService(title);
        // si retorna null, no hay pelicula con ese nombre
        movie === null
        ? res.status(404).json({ msg: "Movie not found" })
        : res.status(200).json(movie);
    } catch (error) {
        next(error)
    };
};

module.exports = getMovieByTitleController;
