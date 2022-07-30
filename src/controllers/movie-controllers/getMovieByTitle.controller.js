const getMovieByTitleService = require('../../services/movie-services/getMovieByTitle.service.js');

const getMovieByTitleController = async (req, res, next) => {
    const { title } = req.query;
    try {
        if (title) {
            const movie = await getMovieByTitleService(title);
            movie === null
            ? res.status(404).json({ msg: "Movie not found" })
            : res.status(200).json(movie);
        };
        next()
    } catch (error) {
        next(error)
    };
};

module.exports = getMovieByTitleController;
