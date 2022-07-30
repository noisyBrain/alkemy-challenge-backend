const { Character, Movie } = require('../../db');

const deleteCharacterController = async (req, res, next) => {
    const { id } = req.params;
    try {
        const findCharacter = await Character.findByPk(id)
        console.log(findCharacter)
        // ? await Character.destroy({ where: { id } })
        // : res.status(404).json({ msg: "Character not found" });
        // const deletedCharacter = await Character.destroy({
        //     where: { id }
        // });
        // console.log("deleted -> ",deletedCharacter)
        // res.status(200).json({ msg: "Character deleted" });
        res.status(200).json("ok");
    } catch (error) {
        next(error)
    };
};

module.exports = deleteCharacterController
