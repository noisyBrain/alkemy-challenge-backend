const { Router } = require('express');
const auth = require("./auth-routes/index.js");
const getAllUsers = require("./user-routes/getUsers.routes.js");

const router = Router();

router.use('/auth', auth)
router.use('/users', getAllUsers);

module.exports = router;