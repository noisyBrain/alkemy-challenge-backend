const User = require("../../models/User");

const login = async (req, res, next) => {
    try {
        res.json({ msg: 'login' });

    } catch (error) {
        next(error)
    };
 };

module.exports = login;