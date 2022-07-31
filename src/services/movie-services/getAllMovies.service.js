const { Character, Movie } = require('../../db');

const getAllMoviesService = async () => {
    try {
        // Buscamos a todas las peliculas que haya en la db
        // luego lo parseamos a json para poder operar
        let movies = (await Movie.findAll())
          .map(e => e.toJSON());
        movies = movies?.map(movie => ({
            title: movie?.title,
            image: movie?.image,
            released: movie?.released
        }));
        // retornamos al controlador solo las propiedades de interes
        return movies;
    } catch (error) {
        return error;
    };
};

module.exports = getAllMoviesService;
