const { Genre } = require('../../db');

const filterMoviesByGenreService = async (genre) => {
    try {
        // buscamos por id el genero
        const findGenre = await Genre.findByPk(genre);
        if (findGenre === null) {
            // no lo encuentra retorna null
            return findGenre
        };
        // si lo encuentra, obtenemos los personajes asociados
        const genre_movies = await findGenre.getMovies({
          attributes: {
            exclude: ["id"]
          },
        });
        return genre_movies;
    } catch (error) {
        return error
    };
};

module.exports = filterMoviesByGenreService;
