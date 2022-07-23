const getAllUsers = require('../../controllers/user-controllers/getAllUsers.controller')
const router = require('express').Router();

router.get('/', getAllUsers)

module.exports = router;