const { Genre, Movie } = require('../../db');

const getAllGenres = async () => {
    try {
        let genres = (await Genre.findAll({
          include: {
            model: Movie,
            attributes: ["title"]
          }
        }));
          .map(e => e.toJSON());
        genres = genres?.map(genre => ({
            name: genre?.title,
            image: genre?.image,
            movies: genre?.movies,
        }));
        return genres;
    } catch (error) {
        console.error(error)
    };
};

module.exports = getAllMoviesService;
