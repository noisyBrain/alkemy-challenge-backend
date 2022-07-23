const { User } = require('../../db');

const getAllUsers = async (req, res, next) => {

    try {
        const user = await User.findAll()
        res.json(user)
    } catch (error) {
        next(error)
    }
}

module.exports = getAllUsers;