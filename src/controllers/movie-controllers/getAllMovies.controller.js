const getAllMoviesService = require('../../services/movie-services/getAllMovies.service');

const getAllMoviesController = async (req, res, next) => {
    try {
        if (req.query.title || req.query.genre || req.query.order) return next()
        const allMovies = await getAllMoviesService();
        allMovies === null
        ? res.status(404).json({ msg: "Movies not found" })
        : res.status(200).json(allMovies);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAllMoviesController;
