const getAllMoviesService = require('../../services/movie-services/getAllMovies.service');

const getAllMoviesController = async (req, res, next) => {
    try {
        // if (req.query.name || req.query.age || req.query.movie) return next()
        const allCharacters = await getAllMoviesService();
        allCharacters.length < 1
        ? res.status(404).json({ msg: "Characters not found" })
        : res.status(200).json(allCharacters);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAllMoviesController;