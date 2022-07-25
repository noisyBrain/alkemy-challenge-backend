const showCharactersService = require('../../services/character-services/getAllCharacters.service');

const getAllCharactersController = async (req, res, next) => {
    try {
        const allCharacters = await showCharactersService()
        allCharacters.length < 1
        ? res.status(404).json({ msg: "Characters not found" })
        : res.status(200).json(allCharacters);
    } catch (error) {
       next(error) 
    };
};

module.exports = getAllCharactersController;