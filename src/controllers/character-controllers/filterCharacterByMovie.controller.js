const filterCharacterByMovieService = require('../../services/character-services/filterCharacterByMovie.service');

const filterCharacterByMovieController = async (req, res, next) => {
    const { movies } = req.query;
    try {
        const allCharacters = await filterCharacterByMovieService(movies)
        allCharacters === null
        ? res.status(404).json({ msg: "Movies not found" })
        : res.status(200).json(allCharacters);
    } catch (error) {
       next(error) 
    };
};

module.exports = filterCharacterByMovieController;
