const { Character, Genre, Movie, User } = require('../db');

// funcion para poblar la base de datos
// cuando se levanta el servidor
const seeder = async () => {
  // buscamos peliculas en la db
  const movies = await Movie.findAll();    
  // si no existen las creamos
  if (movies.length < 1) {
    // primer pelicula
    await Movie.create(
      {
        title: "Shrek",
        image: "image",
        released: "2001-04-22",
        rating: 5,
        genres: [{ name: "Traditional" }],
        characters: [
          {
            name: "Shrek",
            image: "image",
            age: 55,
            weight: 234,
            history: "Ogre that lives in the swamp"
          },
          {
            name: "Donkey",
            image: "image",
            age: 32,
            weight: 90,
            history: "Ogre's best friend"
          },
          {
            name: "Fiona",
            image: "image",
            age: 34,
            weight: 134,
            history: "Ogre's wife",
          },
        ]
      },
      { 
        // incluimos los modelos asociados
        include: [
          {
            model: Character,
            through: {
              attributes: []
            }
          },
          {
            model: Genre,
            through: {
              attributes: []
            }
          }
        ]
      }
    );

    // segunda pelicula
    await Movie.create(
      {
        title: "Zootropolis",
        image: "image",
        released: "2016-03-17",
        rating: 4,
        genres: [{ name: "Animated" }],
        characters: [
          {
            name: "Judy Hopps",
            image: "image",
            age: 21,
            weight: 23,
            history: "Rabbit that wants to become to a police"
          },
          {
            name: "Nick Wilde",
            image: "image",
            age: 24,
            weight: 28,
            history: "A red fox that helps Judy"
          },
          {
            name: "Chief Bogo",
            image: "image",
            age: 43,
            weight: 99,
            history: "Chief of the Zootopia Police Department."
          },
        ]
      },
      { 
        // incluimos los modelos asociados
        include: [
          {
            model: Character,
            through: {
              attributes: []
            }
          },
          {
            model: Genre,
            through: {
              attributes: []
            }
          }
        ]
      }
    );
  };
  // buscamos usarios en la db
  const users = await User.findAll(); 
  // si no existen, creamos uno
  if (users.length < 1) {
    const newUser = await User.create({
      firstName: "Test",
      lastName: "User",
      userName: "testUser",
      email: "testuser@gmail.com",
      password: "Userpassword!10"
    });
  };
};

module.exports = seeder;
