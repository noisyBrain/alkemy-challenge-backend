const { Character, Movie } = require('../../db');

const getAllMoviesService = async () => {
    try {
        let movies = (await Movie.findAll())
        .map(e => e.toJSON());
        console.log("movies completo ", movies)
        movies = movies?.map(movie => ({
            title: movie?.title,
            image: movie?.image,
            released: movie?.released
        }))
        console.log("movies", movies)
        return movies;
    } catch (error) {
        console.error(error)
    };
};

module.exports = getAllMoviesService;