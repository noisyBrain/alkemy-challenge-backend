const { Character, Movie } = require('../../db');

const postMovieController = async (req, res, next) => {
    try {
        const newMovie =  await Movie.findOrCreate({
            where: { title: req.body.title },
            defaults: {
                released: req.body.released,
                rating: req.body.rating,
            }
        })
        // const assoc_chars = await Character.findAll({
        //     where: { assocciated_characters: req.body.assocciated_characters }
        // })
        // newMovie.addCharacter(assoc_chars)
        res.status(201).json(newMovie)
    } catch (error) {
        next(error)
    };
};

module.exports = postMovieController;