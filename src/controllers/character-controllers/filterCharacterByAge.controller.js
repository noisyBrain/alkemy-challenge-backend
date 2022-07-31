const filterCharacterByAgeService = require('../../services/character-services/filterCharacterByAge.service');

const getCharacterByAgeController = async (req, res, next) => {
    const { age } = req.query;
    try {
        if (age) {
            const character = await filterCharacterByAgeService(age);
            character.length < 1
            ? res.status(404).json({ msg: "Characters not found" })
            : res.status(200).json(character)
            return
        }
        next()
    } catch (error) {
        next(error)
    };
};

module.exports = getCharacterByAgeController;
