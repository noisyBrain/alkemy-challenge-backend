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
            ...character,
            movies_series: character?.movies_series?.map(m => m.title) 
        }))
        return characters;
    } catch (error) {
        console.error(error)
    };
};

module.exports = getAllCharactersService;