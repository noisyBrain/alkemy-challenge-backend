const { Character, Movie } = require('../../db');

const postCharacterController = async (req, res, next) => {
    try {
        const [newCharacter, created] = await Character.findOrCreate({
            where: { name: req.body.name },
            defaults: {
                image: req.body.image,
                age: req.body.age,
                weight: req.body.weight,
                history: req.body.history,
            }
        });
        if (req.body.movies) {
            const movies = await Movie.findAll({
                where: { title: req.body.movies }
            })
            console.log("movies después del findAll() -> ", movies)
            newCharacter.addMovies(movies)
            console.log("newChar antes de salir del if -> ", newCharacter)
        }
        console.log("esto es newCharacter antes de la respnse -> ", newCharacter)
        res.status(201).json(newCharacter)
    } catch (error) {
        next(error)
    };
};

module.exports = postCharacterController;