const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "genre",
        {
            id: {
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              validate: {
                isUUID: 4,
              },
              primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            image: {
                type: DataTypes.STRING,
            },
        },
    );
};
