const jwt = require('jsonwebtoken');
const { User } = require('../db');
const { SECRET_TOKEN } = process.env;

const validateUser = async (req, res, next) => {
    try {
        const  token  = req.header("authToken");
        console.log("token -> ", token)
        if (!token) return res.status(401).send("Unauthorized access")
        const payload = jwt.verify(token, SECRET_TOKEN)
        const user = await User.findByPk(payload.id)
        if (!user) return res.status(404).json({ msg: 'Not user found' })
        // save user properties in the request
        next()
        
    } catch (error) {
        next(error)
    }
};

module.exports = validateUser;