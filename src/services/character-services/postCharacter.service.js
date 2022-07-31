const { Character, Movie } = require('../../db');

const postCharacterService = async (req) => {
    const { age, history, image, movies, name, weight } = req.body;
    try {
        if (age && name) {
          const [newCharacter] = await Character.findOrCreate({
              where: { name },
              defaults: {
                  image,
                  age,
                  weight,
                  history,
              },
          });
          if (movies) {
              const findMovies = await Movie.findAll({
                  where: { title: movies }
              });
              await newCharacter.addMovie(findMovies)
          };
          return newCharacter;
        };
        return null;
    } catch (error) {
        return error;
    };
};

module.exports = postCharacterService;
