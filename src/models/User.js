const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User",
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
            },
            password: {
                type: DataTypes.STRING,
            },
            profileImage: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false
        }
    )
};