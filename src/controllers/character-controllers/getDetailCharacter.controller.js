const getDetailCharacterService = require('../../services/character-services/getDetailCharacter.service');

const getDetailCharacterController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const characterDetail = await getDetailCharacterService(id)
        characterDetail.length < 1
        ? res.status(404).json({ msg: "Characters not found" })
        : res.status(200).json(characterDetail);
    } catch (error) {
       next(error) 
    };
};

module.exports = getDetailCharacterController;