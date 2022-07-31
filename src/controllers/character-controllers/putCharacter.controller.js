const putCharacterService = require('../../services/character-services/putCharacter.service.js');

const putCharacterController = async (req, res, next) => {
    try {
        const updatedCharacter = await putCharacterService(req)
        updatedCharacter === null
        ? res.status(400).json({ msg: "Character not found or not enough parameters" })
        : res.status(200).json({ msg: "Character updated" });
    } catch (error) {
        next(error)
    };
};

module.exports = putCharacterController
