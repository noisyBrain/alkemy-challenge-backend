const filterCharacterByAgeService = require('../../services/character-services/filterCharacterByAge.service');

const getCharacterByAgeController = async (req, res, next) => {
    try {
        if (req.query.age) {
            const character = await filterCharacterByAgeService(req.query.age);
            return res.status(200).json(character)
        }
        next()
    } catch (error) {
        next(error)
    };
};

module.exports = getCharacterByAgeController;