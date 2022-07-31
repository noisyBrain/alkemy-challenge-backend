const { Character, Movie } = require('../../db');

const getDetailCharacterService = async (id) => {
    try {
        const characters = await Character.findByPk(id, {
            include: [{
                model: Movie,
                through: { 
                    attributes: []
                },
            }],
        })
        return characters;
    } catch (error) {
        console.error(error)
    };
};

module.exports = getDetailCharacterService;
