const postMovieService = require('../../services/movie-services/postMovie.service');

const postMovieController = async (req, res, next) => {
    try {
        // llamamos al servicio pasando la request
        const newMovie = await postMovieService(req)
        // si devuelve null ocurrio un error
        newMovie === null
        ? res.status(500).json({ msg: "You must provide, at least, title and released" })
        : res.status(201).json(newMovie);
    } catch (error) {
        next(error)
    };
};

module.exports = postMovieController;
