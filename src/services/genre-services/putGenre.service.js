const { Genre } = require('../../db');

const putGenreService = async (req) => {
    const { image, name } = req.body;
    const { id } = req.params;
    try {
        if (name || image) {
            const findGenre = await Genre.findByPk(id);
            if (findGenre) {
                findGenre.update({
                    image,
                    name
                });
            };
            return findGenre;
        }
        return null;
    } catch (error) {
        return error;
    };
};

module.exports = putGenreService;
