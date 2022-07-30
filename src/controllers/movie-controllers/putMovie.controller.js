const putMovieService = require('../../services/movie-services/putMovie.service');

const putMovieController = async (req, res, next) => {
    try {
        const updatedMovie = await putMovieService(req)
        res.status(200).json({ msg: "Updated successfully"});
    } catch (error) {
        next(error)
    };
};

module.exports = putMovieController;
