const validateToken = require('../../middlewares/validateToken');
const postMovieController = require('../../controllers/movie-controllers/postMovie.controller');

const router = require('express').Router()

// router.get('/', validateToken, getAllCharactersController);
router.post('/', validateToken, postMovieController);
// router.put('/', validateToken, putCharacterController);
// router.delete('/:id', validateToken, deleteCharacterController);

module.exports = router;