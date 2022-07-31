const putGenreService = require('../../services/genre-services/putGenre.service.js');

const putGenreController = async (req, res, next) => {
    try {
        const updatedGenre = await putGenreService(req)
        updatedGenre === null
        ? res.status(404).json({ msg: "Genre not found" })
        : res.status(200).json({ msg: "Genre updated" });
    } catch (error) {
        next(error)
    };
};

module.exports = putGenreController;
