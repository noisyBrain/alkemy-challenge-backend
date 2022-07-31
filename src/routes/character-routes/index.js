const getAllCharactersController = require("../../controllers/character-controllers/getAllCharacters.controller");
const validateToken = require("../../middlewares/validateToken");
const postCharacterController = require("../../controllers/character-controllers/postCharacters.controller");
const putCharacterController = require("../../controllers/character-controllers/putCharacter.controller");
const deleteCharacterController = require("../../controllers/character-controllers/deleteCharacter.controller");
const getDetailCharacterController = require("../../controllers/character-controllers/getDetailCharacter.controller");
const getCharacterByNameController = require("../../controllers/character-controllers/getCharacterByName.controller");
const filterCharacterByAgeController = require("../../controllers/character-controllers/filterCharacterByAge.controller");
const filterCharacterByMovieController = require("../../controllers/character-controllers/filterCharacterByMovie.controller");

const router = require("express").Router();

// PONER LA VALIDACION!!!!
router.get("/:id", getDetailCharacterController);
router.get(
  "/",
  getAllCharactersController,
  getCharacterByNameController,
  filterCharacterByAgeController,
  filterCharacterByMovieController
);
router.post("/", postCharacterController);
router.put("/:id", putCharacterController);
router.delete("/:id", deleteCharacterController);

module.exports = router;
