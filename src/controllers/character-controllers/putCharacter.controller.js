const { Character, Movie } = require('../../db');

const putCharacterController = async (req, res, next) => {
    const { name, weight, age, movies, history } = req.body;
    const { id } = req.params;
    try {
        const [_, updatedCharacter] =  await Character.update({ 
                name,
                weight,
                age,
                history,
                // movies
        }, { 
            returning: true,
            where: { id: id } 
        });
        res.status(200).json({ msg: "Character updated" });
    } catch (error) {
        next(error)
    };
};

module.exports = putCharacterController