const { Genre, Movie } = require('../../db');

const getAllGenresService = async () => {
    try {
        let genres = (await Genre.findAll({
          include: {
            model: Movie,
            through: {
                attributes: []
            }
          }
        }))
          .map(e => e.toJSON());
        genres = genres?.map(genre => ({
            name: genre?.name,
            image: genre?.image,
            movies: genre?.movies?.map(m => m.title),
        }));
        return genres;
    } catch (error) {
        console.error(error)
    };
};

module.exports = getAllGenresService;
