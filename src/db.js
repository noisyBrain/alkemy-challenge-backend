require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    native: false,
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false,
        },
        keepAlive: true,
    },
    ssl: true,
});



module.exports = {
    db: sequelize,
}
    