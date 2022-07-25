const { Character, Movie } = require('../../db');

const putCharacterController = async (req, res, next) => {
    const { name, weight, age, movies_series, history } = req.body;
    try {
        const updatedCharacter =  await Character.update({ 
                weight,
                age,
                history,
                movies_series
        }, { where: { name } });

        res.status(200).json({ msg: "Character updated" });
    } catch (error) {
        next(error)
    };
};

module.exports = putCharacterController