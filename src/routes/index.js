const { Router } = require('express');
const getTest = require("./test.routes");

const router = Router();

router.use('/test', getTest)

module.exports = router;