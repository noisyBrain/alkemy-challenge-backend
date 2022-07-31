const getAllCharactersService = require('../../services/character-services/getAllCharacters.service');

const getAllCharactersController = async (req, res, next) => {
    try {
        if (req.query.name || req.query.age || req.query.movies) return next()
        const allCharacters = await getAllCharactersService();
        allCharacters.length < 1
        ? res.status(404).json({ msg: "Characters not found" })
        : res.status(200).json(allCharacters);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAllCharactersController;
