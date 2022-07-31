const { Character, Genre, Movie } = require('../../db');

const getDetailMovieService = async (id) => {
    try {
        // buscamos la pelicula por id, incluyendo
        // los modelos relacionados
        const movie = await Movie.findByPk(id, {
            include: [Character, Genre]
        });
        // retorna null si no existe,
        // de lo contrario, la pelicula
        return movie;
    } catch (error) {
        return error
    };
};

module.exports = getDetailMovieService;
