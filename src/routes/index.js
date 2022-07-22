const { Router } = require('express');
const getTest = require("./character-routes/index.routes");

const router = Router();

router.use('/test', getTest)

module.exports = router;