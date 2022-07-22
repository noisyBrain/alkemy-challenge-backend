const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Genre",
        {
            id: {
                type: DataTypes.INTEGER,
                autoInCrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            image: {
                type: DataTypes.STRING,
            },
            associated_movies_series: {
                type: DataTypes.ARRAY(DataTypes.STRING)
            }
        }
    );
};