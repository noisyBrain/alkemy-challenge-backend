const getCharacterByNameService = require('../../services/character-services/getCharacterByName.service');

const getCharacterByNameController = async (req, res, next) => {
    const { name } = req.query;
    try {
        // si llega name por query, llamamos al servicio
        if (name) {
            const characters = await getCharacterByNameService(name);
            characters === null
            ? res.status(404).json({ msg: "Characters not found" })
            : res.status(200).json(characters)
            // retornamos para que corte la ejecucion
            // y no siga al proximo controlador
            return;
        }
        // si no recibimos name, pasa al siguiente controlador
        next()
    } catch (error) {
        next(error)
    };
};

module.exports = getCharacterByNameController;
