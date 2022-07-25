const { Character, Movie } = require('../../db');

const postCharacterController = async (req, res, next) => {
    try {
        const [newCharacter, created] = await Character.findOrCreate({
            where: { name: req.body.name },
            defaults: {
                // name: req.body.name,
                image: req.body.image,
                age: req.body.age,
                weight: req.body.weight,
                history: req.body.history,
            }
        });
        const movies = await Movie.findAll({
            where: { title: req.body.movies_series }
        })
        newCharacter.addMovies(movies)
        res.status(201).json(newCharacter)
    } catch (error) {
        next(error)
    };
};

module.exports = postCharacterController;