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
            },
            associated_characters: {
                type: DataTypes.ARRAY(DataTypes.STRING),
            }
        },
        {
            timestamps: false
        }
    )
}