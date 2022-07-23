const { Op } = require('../../db');
const { User } = require('../../db');

const validator = require('validator');
const jwt = require('jsonwebtoken');

const register = async (req, res, next) => {

    const { firstName, lastName, userName, email, password } = req.body
    try {
        if (!(firstName && lastName && userName && email && password)) {
            return res.json({ msg: "Some fields are required" })
        }
        // check valid email
        if (!validator.isEmail(email)) throw Error("Email field must be a valid email")
        // strongPassword default = minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1 and minSymbols: 1
        if (!validator.isStrongPassword(password)) throw Error("Password too weak")
        const exists = await User.findOne({
            where: {
                [Op.or]: [
                    { email },
                    { userName }
                ]
            }
        });
        if (exists) throw Error("Email or username already exists")
        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password
        })
        user.save()
        const token = jwt.sign(
            {
                id: user.id,
                firstName: user.firstName,
            },
            process.env.SECRET_TOKEN,
            {
                expiresIn: 60 * 60
            }
        )
        return res.header("authnoseque", token).status(200).json(user)

    } catch (error) {
        next(error)
    };
};

module.exports = register;