const getAllCharactersController = require('../../controllers/character-controllers/getAllCharacters.controller');
const validateToken = require('../../middlewares/validateToken');
const postCharacterController = require('../../controllers/character-controllers/postCharacters.controller');
const putCharacterController = require('../../controllers/character-controllers/putCharacter.controller');
const deleteCharacterController = require('../../controllers/character-controllers/deleteCharacter.controller');

const router = require('express').Router()

router.get('/', validateToken, getAllCharactersController);
router.post('/', validateToken, postCharacterController);
router.put('/', validateToken, putCharacterController);
router.delete('/:id', validateToken, deleteCharacterController);

module.exports = router;