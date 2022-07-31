const deleteCharacterService = require('../../services/character-services/deleteCharacter.service.js');

const deleteCharacterController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deletedCharacter = await deleteCharacterService(id);
        deletedCharacter === 0
        ? res.status(404).json({ msg: "Character not found" })
        : res.status(200).json({ msg: "Character deleted" });
    } catch (error) {
        next(error)
    };
};

module.exports = deleteCharacterController
