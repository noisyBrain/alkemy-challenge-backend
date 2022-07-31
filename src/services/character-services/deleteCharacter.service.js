const { Character } = require('../../db');

const deleteCharacterService = async (id) => {
    try {
        const deletedCharacter = await Character.destroy({ where: { id } })
        return deletedCharacter;
    } catch(error) {
      return error
    };
};

module.exports = deleteCharacterService;
