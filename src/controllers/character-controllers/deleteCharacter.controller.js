const { Character, Movie } = require('../../db');

const deleteCharacterController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const updatedCharacter =  await Character.destroy({
            where: { id }
        });
        res.status(200).json({ msg: "Character deleted" });
    } catch (error) {
        next(error)
    };
};

module.exports = deleteCharacterController