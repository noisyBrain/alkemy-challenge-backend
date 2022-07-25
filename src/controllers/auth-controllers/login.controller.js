const jwt = require("jsonwebtoken");
const { User } = require("../../db");
const { SECRET_TOKEN } = process.env

const login = async (req, res, next) => {
    const { password, userName } = req.body
    try {
       const user = await User.findOne({
        where: { userName }
    });
    if (!user) return res.status(400).json({ msg: "User not found" })
    const validPassword = await user.validatePassword(password)
    if (!validPassword) {
        return res.status(400).json({ msg: "Incorrect username or password" })
    }
    const token = jwt.sign(
        {
            id: user.id,
            userName: user.userName,
            email: user.email
        },
        SECRET_TOKEN,
        { expiresIn: 60 * 60 }
    )
    console.log(token)
    res.header(token).status(200).json({ msg: 'Login successfuly' })
    } catch (error) {
        next(error)
    };
 };

module.exports = login;