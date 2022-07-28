const { Character, Movie, Op } = require('../../db');

const getCharacterByNameService = async (name) => {
    try {
        const character = await Character.findOne({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            include: {
                model: Movie,
                through: {
                    attributes: []
                }
            }
        });
        return character
    } catch (error) {
        return error
    };
};

module.exports = getCharacterByNameService;