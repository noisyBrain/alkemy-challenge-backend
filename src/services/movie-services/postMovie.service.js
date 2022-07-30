const { Character, Genre, Movie } = require('../../db');

const postMovieService = async (req) => {
    const { title, image, released, rating, characters, genres } = req.body;
    try {
        const [createdChar] = await Character.findOrCreate({
          where: { name: characters }
        });
        const [createdGenre] = await Genre.findOrCreate({
          where: { name: genres }
        });
        console.log("esto es createdGenere", createdGenre);
        const [newMovie] =  await Movie.findOrCreate({
            where: { title },
            defaults: {
                released,
                image,
                rating,
            },
        });
        newMovie.addCharacter(createdChar);
        newMovie.addGenre(createdGenre);
        return newMovie;
    } catch (error) {
        return error
    };
};

module.exports = postMovieService;
