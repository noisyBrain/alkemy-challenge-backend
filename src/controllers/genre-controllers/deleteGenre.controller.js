const deleteGenreService = require('../../services/genre-services/deleteGenre.service.js');

const deleteGenreController = async (req, res, next) => {
    try {
        const deletedGenre = await deleteGenreService(req);
        deletedGenre === null
        ? res.status(404).json({ msg: "Genre not found" });
        : res.status(200).json({ msg: "Genre deleted" });
    } catch (error) {
        next(error)
    };
};

module.exports = deleteGenreController;
