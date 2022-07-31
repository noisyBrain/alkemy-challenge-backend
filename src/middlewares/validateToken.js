const jwt = require('jsonwebtoken');
const { User } = require('../db');
const { SECRET_TOKEN } = process.env;

// funcion para validar el usuario
const validateUser = async (req, res, next) => {
    try {
        // extraemos el token del header
        const  token  = req.header("authToken");
        // si no existe el token, no esta autorizado
        if (!token) return res.status(401).send("Unauthorized access")
        // si existe, tomamos el token y lo verificamos
        // contra el token secreto
        const payload = jwt.verify(token, SECRET_TOKEN)
        // comprobamos que el usuario sea dueño del token provisto
        const user = await User.findByPk(payload.id)
        // si no matchea, no hay usuario
        if (!user) return res.status(404).json({ msg: 'Not user found' })
        // si matchea, se pasa al siguiente middleware en la ruta
        next()
        
    } catch (error) {
        next(error)
    }
};

module.exports = validateUser;
