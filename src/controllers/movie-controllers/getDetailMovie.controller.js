const getDetailMovieService = require('../../services/movie-services/getDetailMovie.service');

const getDetailMovieController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const movieDetail = await getDetailMovieService(id)
        movieDetail.length < 1
        ? res.status(404).json({ msg: "Characters not found" })
        : res.status(200).json(movieDetail);
    } catch (error) {
       next(error) 
    };
};

module.exports = getDetailMovieController;