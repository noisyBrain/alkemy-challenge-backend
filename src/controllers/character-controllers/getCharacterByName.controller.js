const getCharacterByNameService = require('../../services/character-services/getCharacterByName.service');

const getCharacterByNameController = async (req, res, next) => {
    try {
        if (req.query.name) {
            const character = await getCharacterByNameService(req.query.name);
            return res.status(200).json(character)
        }
        next()
    } catch (error) {
        next(error)
    };
};

module.exports = getCharacterByNameController;