const getDetailMovieService = require('../../services/movie-services/getDetailMovie.service');

const getDetailMovieController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const movieDetail = await getDetailMovieService(id)
        console.log('movieDetail -> ', movieDetail);
        if (movieDetail.error) return res.status(404).json(movieDetail.error)
        movieDetail.length < 1
        ? res.status(404).json({ msg: "Movie not found" })
        : res.status(200).json(movieDetail);
    } catch (error) {
       next(error) 
    };
};

module.exports = getDetailMovieController;
