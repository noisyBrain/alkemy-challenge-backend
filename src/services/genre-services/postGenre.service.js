const { Genre } = require('../../db');

const postGenreService = async (req) => {
    const { image, name } = req.body;
    try {
        if (name) {
            const [newGenre, created] =  await Genre.findOrCreate({
                where: { name },
                defaults: {
                    image,
                },
            });
            return newGenre;
        }
        return null;
    } catch (error) {
        return error;
    };
};

module.exports = postGenreService;
