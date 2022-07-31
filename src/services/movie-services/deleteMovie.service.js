const { Movie } = require('../../db');

const deleteMovieService = async (req) => {
    const { id } = req.params;
    try {
        // destroy devuelve 1 si encontro y elimino la tabla,
        // devuelve 0 si no encontro coincidencias 
        const deletedMovie =  await Movie.destroy({
            where: { id }
        });
        // retornamos el valor al controlador
        return deletedMovie;
    } catch (error) {
        return error
    };
};

module.exports = deleteMovieService
