const { Character, Movie } = require('../../db');

const postMovieService = async (req) => {
    const { title, image, released, rating, associated_characters } = req.body;
    try {
        const [newMovie, created] =  await Movie.findOrCreate({
            where: { title },
            defaults: {
                released,
                image,
                rating,
            },
        });
        console.log("esto es newMovie => ", newMovie);
        if (associated_characters) {
            const characters = await Character.findAll({
                where: { name: associated_characters }
            });
            console.log("chars después del findAll(): ", characters)
            console.log(newMovie instanceof Movie)
            newMovie.addCharacter(characters);
            console.log("esto newmovie despues del addCharacter", newMovie)
        };
        console.log("esto es newMovie antes de response -> ", newMovie);
        return newMovie;
    } catch (error) {
        return error
    };
};

module.exports = postMovieService;