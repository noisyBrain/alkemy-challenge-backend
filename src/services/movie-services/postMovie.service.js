const { Character, Genre, Movie } = require('../../db');

const postMovieService = async (req) => {
    const { title, image, released, rating, characters, genres } = req.body;
    try {
        // title y released son obligatorios
        // si no son provistos, retorna null
        if (title && released) {
          // buscamos o creamos un personaje
          const [createdChar] = await Character.findOrCreate({
            where: { name: characters }
          });
          // buscamos o creamos un genero
          const [createdGenre] = await Genre.findOrCreate({
            where: { name: genres }
          });
          // buscamos o creamos una pelicula
          const [newMovie] =  await Movie.findOrCreate({
              where: { title },
              defaults: {
                  released,
                  image,
                  rating,
              },
          })
          // añadimos a la pelicula creada personaje y genero
          newMovie.addCharacter(createdChar);
          newMovie.addGenre(createdGenre);
          // retorna la pelicula creada
          return newMovie;
        };
        return null;
    } catch (error) {
        return error
    };
};

module.exports = postMovieService;
