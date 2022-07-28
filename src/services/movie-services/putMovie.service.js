const { Movie } = require('../../db');

const putMovieService = async (req) => {
    const { title, image, rating } = req.body;
    const { id } = req.params;
    try {
        const [_, updatedMovie] =  await Movie.update({ 
                title,
                image,
                rating,
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