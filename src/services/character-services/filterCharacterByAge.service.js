const { Character, Movie } = require('../../db');

const filterCharacterByAgeService = async (age) => {
    try {
        const character = await Character.findAll({
            where: { age },
            include: {
                model: Movie,
                through: {
                    attributes: [],
                },
            },
        });
        return character
    } catch (error) {
        return error
    };
};

module.exports = filterCharacterByAgeService;