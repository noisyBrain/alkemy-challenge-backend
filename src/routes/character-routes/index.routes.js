const test = require('../../controllers/character-controllers/index.controller')

const router = require('express').Router();

router.get('/', test);

module.exports = router;