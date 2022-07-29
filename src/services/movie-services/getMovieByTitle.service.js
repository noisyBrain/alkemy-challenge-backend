const { Character, Movie, Op } = require('../../db');

const getMovieByName = async (title) => {
    try {
        const character = await Movie.findOne({
            where: {
                title: {
                    [Op.iLike]: `%${title}%`,
                },
            },
            include: {
                model: Character,
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

module.exports = getMovieByName;
