const getAllGenresService = require('../../services/genre-services/getAllGenres.service');

const getAlloGenresController = async (req, res, next) => {
    try {
        const allGenres = await getAllGenresService();
        // quiero ver como me llega para comprobar null o length 
        console.log("allgenres en controller", allGenres)
        allGenres.length < 1
        ? res.status(404).json({ msg: "Genres not found" })
        : res.status(200).json(allMovies);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAllGenresController;
