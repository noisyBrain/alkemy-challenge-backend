const getDetailMovieService = require('../../services/movie-services/getDetailMovie.service');

const getDetailMovieController = async (req, res, next) => {
    const { id } = req.params;
    try {
        // llamamos al servicio pasandole el id de la pelicula
        const movieDetail = await getDetailMovieService(id)
        // si devuelve null, la pelicula no existe
        // de lo contrario, se devuelve la pelicula
        movieDetail === null
        ? res.status(404).json({ msg: "Movie not found" })
        : res.status(200).json(movieDetail);
    } catch (error) {
       next(error) 
    };
};

module.exports = getDetailMovieController;
