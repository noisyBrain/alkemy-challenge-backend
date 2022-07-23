const router = require('express').Router();
const login = require('../../controllers/auth-controllers/login.controller');
const register = require('../../controllers/auth-controllers/register.controller');

router.post('/login', login)
router.post('/register', register)

module.exports = router;