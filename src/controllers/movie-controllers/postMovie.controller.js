const postMovieService = require('../../services/movie-services/postMovie.service');

const postMovieController = async (req, res, next) => {
    try {
        const newMovie = await postMovieService(req)
        console.log("new Movie en el controller: ", newMovie)
        res.status(201).json(newMovie);
    } catch (error) {
        next(error)
    };
};

module.exports = postMovieController;