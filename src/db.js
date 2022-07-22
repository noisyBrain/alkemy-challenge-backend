require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require("fs");
const path = require("path");

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

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Character, Genre, Movie } = sequelize.models

Character.belongsToMany(Movie, { through: "Character_Movie" })
Movie.belongsToMany(Character, { through: "Character_Movie" })

Movie.belongsToMany(Genre, { through: "Movie_Genre" })
Genre.belongsToMany(Movie, { through: "Movie_Genre" })

module.exports = {
    ...sequelize.models,
    db: sequelize,
}
    