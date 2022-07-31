const validateToken = require("../../middlewares/validateToken");

const getAllGenresController = require("../../controllers/genre-controllers/getAllGenres.controller.js");
const postGenreController = require("../../controllers/genre-controllers/postGenre.controller.js");
const putGenreController = require("../../controllers/genre-controllers/putGenre.controller.js");
const deleteGenreController  = require("../../controllers/genre-controllers/deleteGenre.controller.js");

const router = require("express").Router();

// PONER LA VALIDACION!!!!
router.get("/", getAllGenresController);
router.post("/", postGenreController);
router.put("/:id", putGenreController);
router.delete("/:id", deleteGenreController);

module.exports = router;
