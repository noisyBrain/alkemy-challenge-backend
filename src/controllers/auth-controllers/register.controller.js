const { Op, User } = require('../../db');

const jwt = require('jsonwebtoken');
const validator = require('validator');
const emailSender = require('../../libs/sendgrid.js');

const register = async (req, res, next) => {

    const { firstName, lastName, userName, email, password } = req.body
    try {
        if (!(firstName && lastName && userName && email && password)) {
            return res.json({ msg: "Some fields are required" })
        }
        // check valid email
        if (!validator.isEmail(email)) throw new Error("Email field must be a valid email")
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
        if (exists) throw new Error("Email or username already exists")
        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password
        })
        const savedUser = await user.save()
        const sent = await emailSender(savedUser.email);
        console.log("esto es lo que se envio => ", sent);
        // create a token and send it to the header
        const token = jwt.sign(
            {
                id: savedUser.id,
                email: savedUser.email,
                userName: savedUser.userName,
            },
            process.env.SECRET_TOKEN,
            { expiresIn: 60 * 60 }
        );
        console.log(token)
        return res.header("authToken", token).status(200).json(user)

    } catch (error) {
        next(error)
    };
};

module.exports = register;
