const postCharacterService = require('../../services/character-services/postCharacter.service.js');

const postCharacterController = async (req, res, next) => {
    try {
        const createdCharacter = await postCharacterService(req)
        createdCharacter === null
        ? res.status(400).json({ msg: "Name and age, at least, are required" })
        : res.status(201).json({ msg: "Character created" })
    } catch (error) {
        next(error)
    };
};

module.exports = postCharacterController;
