const { Genre } = require('../../db');

const postGenreService = async (req) => {
    const { image, name } = req.body;
    try {
        const [newGenre, created] =  await Genre.findOrCreate({
            where: { name },
            defaults: {
                image,
            },
        });
        return newGenre;
    } catch (error) {
        return error;
    };
};

module.exports = postMovieService;
