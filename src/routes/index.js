const { Router } = require('express');
const auth = require("./auth-routes/index.js");
const characters = require('./character-routes');
const movies = require('./movie-routes');

const router = Router();

router.use('/auth', auth)
router.use('/characters', characters);
router.use('/movie', movies)

module.exports = router;