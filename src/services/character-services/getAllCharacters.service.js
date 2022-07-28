const { Character, Movie } = require('../../db');

const getAllCharactersService = async () => {
    try {
        let characters = (await Character.findAll({
            include: {
                model: Movie,
                attributes: ["title"],
                through: {
                    attributtes: [],
                }
            }
        })).map(e => e.toJSON())
        characters = characters?.map(character => ({
            name: character?.name,
            image: character?.image
        }))
        return characters;
    } catch (error) {
        console.error(error)
    };
};

module.exports = getAllCharactersService;