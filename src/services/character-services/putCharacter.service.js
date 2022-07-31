const { Character, Movie } = require('../../db');

const putCharacterService = async (req) => {
  const { age, history, image, movies, name } = req.body;
  const { id } = req.params
  try {
      const findCharacter = await Character.findOne({ where: { id }})
      await findCharacter.update({
          age,
          history,
          image,
          name,
      });
      if (movies) {
          const [createMovies] = await Movie.findOrCreate({
              where: { title: movies }
          })
          findCharacter.addMovie(createMovies)
      };
      return findCharacter;
  } catch (error) {
      return error;
    
  }
}

module.exports = putCharacterService
