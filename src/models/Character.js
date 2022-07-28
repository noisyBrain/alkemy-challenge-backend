const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        "character",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4, 
                validate: {
                    isUUID: 4,
                },
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            image: {
                type: DataTypes.STRING,
            },
            age: {
                type: DataTypes.INTEGER,
            },
            weight: {
                type: DataTypes.FLOAT,
            },
            history: {
                type: DataTypes.TEXT,
            },
        },
    );
};
