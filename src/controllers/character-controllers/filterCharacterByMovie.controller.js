const filterCharacterByMovieService = require('../../services/character-services/filterCharacterByMovie.service');

const filterCharacterByMovieController = async (req, res, next) => {
    const { id } = req.query;
    try {
        const allCharacters = await filterCharacterByMovieService(id)
        allCharacters.length < 1
        ? res.status(404).json({ msg: "Characters not found" })
        : res.status(200).json(allCharacters);
    } catch (error) {
       next(error) 
    };
};

module.exports = filterCharacterByMovieController;