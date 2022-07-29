const getMovieByTitleService = require('../../services/character-services/getCharacterByName.service');

const getMovieByTitleController = async (req, res, next) => {
    try {
        if (req.query.title) {
            const character = await getMovieByTitleService(req.query.name);
            return res.status(200).json(character)
        }
        next()
    } catch (error) {
        next(error)
    };
};

module.exports = getMovieByTitleController;
