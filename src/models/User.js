const { DataTypes } = require("sequelize");

const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
    sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                validate: {
                    isUUID: 4,
                },
                primaryKey: true,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            userName: {
                type: DataTypes.STRING,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
            },
            profileImage: {
                type: DataTypes.STRING,
            },
        },
        {
            hooks: {
                beforeCreate: async function (user) {
                    if (user.password) {
                        const salt = await bcrypt.genSalt(10)
                        user.password = await bcrypt.hash(user.password, salt)
                    }
                }
            },
            timestamps: false,
        }
    )
};