const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "movie",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                validate: {
                    isUUID: 4,
                },
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            image: {
                type: DataTypes.STRING,
            },
            released: {
                type: DataTypes.DATEONLY,
                defaultValue: DataTypes.NOW
            },
            rating: {
                type: DataTypes.INTEGER,
                validate: {
                    min: 1,
                    max: 5,
                },
            }
        },
    );
};