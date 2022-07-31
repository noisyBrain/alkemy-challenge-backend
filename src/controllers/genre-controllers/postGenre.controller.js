const postGenreService = require('../../services/genre-services/postGenre.service.js');

const postGenreController = async (req, res, next) => {
    try {
        const newGenre = await postGenreService(req)
        newGenre === null
        ? res.status(400).json({ msg: "Could not create genre" })
        : res.status(201).json({ msg: "Genre created" });
    } catch (error) {
        next(error)
    };
};

module.exports = postGenreController;
