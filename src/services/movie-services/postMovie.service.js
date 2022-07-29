const { Character, Genre, Movie } = require('../../db');

const postMovieService = async (req) => {
    const { title, image, released, rating, associated_characters, associated_genres } = req.body;
    try {
        const [newMovie, created] =  await Movie.findOrCreate({
            where: { title },
            defaults: {
                released,
                image,
                rating,
            },
        });
        console.log('destruc de newMovie: ', newMovie)
        if (associated_characters) {
          const [characters, created] = await Character.findOrCreate({
            where: { name: associated_characters }
          });
          console.log('destruc de characters', characters)
          newMovie.addCharacter(characters);
        };
        if (associated_genres) {
          const [genres, created] = await Genre.findOrCreate({
            where: { name: associated_genres }
          });
          console.log('destruc de genres: ', genres)
          console.log('genres instacia de Genre? ', genre instanceof Genre)
          newMovie.addGenre(genres)
        };
        console.log('newMovie final: ', newMovie)
        return newMovie;
    } catch (error) {
        return error
    };
};

module.exports = postMovieService;
