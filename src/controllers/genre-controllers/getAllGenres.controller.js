const getAllGenresService = require('../../services/genre-services/getAllGenres.service');

const getAllGenresController = async (req, res, next) => {
    try {
        const allGenres = await getAllGenresService();
        allGenres.length < 1
        ? res.status(404).json({ msg: "Genres not found" })
        : res.status(200).json(allGenres);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAllGenresController;
