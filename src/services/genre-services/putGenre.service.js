const { Genre } = require('../../db');

const putMovieService = async (req) => {
    const { image, name  } = req.body;
    const { id } = req.params;
    try {
        const [_, updatedGenre] =  await Genre.update({ 
                image,
                name,
        }, { 
            returning: true,
            where: { id: id } 
        });
        return updatedMovie;
    } catch (error) {
        return error;
    };
};

module.exports = putMovieService
