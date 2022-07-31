const { Character, Genre, Movie, Op } = require('../../db');

const getMovieByTitleService = async (title) => {
    try {
        // buscamos una pelicula que matchee con el filtro
        const movie = await Movie.findOne({
            where: {
                title: {
                    // operador case Insensitive
                    [Op.iLike]: `%${title}%`,
                },
            },
            // incluimos los modelos asociados
            include: [Character, Genre]
        });
        // retornamos la pelicula si la encuentra,
        // de lo contrario, retorna null
        return movie
    } catch (error) {
        return error
    };
};

module.exports = getMovieByTitleService;
