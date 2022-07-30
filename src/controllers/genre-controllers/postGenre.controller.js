const postGenreService = require('../../services/genre-services/postGenre.service.js');

const postGenreController = async (req, res, next) => {
    try {
        const newGenre = await postGenreService(req)
        // comprobar si hay que validar null o length;
        newGenre === null
        ? res.status(404).json({ msg: "Genre not found" })
        : res.status(201).json({ newGenre });
    } catch (error) {
        next(error)
    };
};

module.exports = postMovieController;
