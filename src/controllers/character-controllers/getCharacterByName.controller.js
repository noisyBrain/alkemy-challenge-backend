const getCharacterByNameService = require('../../services/character-services/getCharacterByName.service');

const getCharacterByNameController = async (req, res, next) => {
    const { name } = req.query;
    try {
        if (name) {
            const characters = await getCharacterByNameService(name);
            characters === null
            ? res.status(404).json({ msg: "Characters not found" })
            : res.status(200).json(characters)
        }
        next()
    } catch (error) {
        next(error)
    };
};

module.exports = getCharacterByNameController;
