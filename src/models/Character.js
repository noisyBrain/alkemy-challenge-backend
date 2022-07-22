const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        "Character",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4, 
                validate: {
                    isUUDV: 4,
                },
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
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
            movies_series: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false,
            },

        }
    )
}
