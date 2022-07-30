const { Character, Genre, Movie, User } = require('../db');

const seeder = async () => {
  const movies = await Movie.findAll();    
  if (movies.length < 1) {
    await Movie.create(
      {
        title: "Shrek",
        image: "image",
        released: "2001-04-22",
        rating: 5,
        genres: "Animated",
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
            history: "Ogre's wife"
          },
        ]
      },
      { 
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
              attributes: ["name"]
            }
          }
        ]
      }
    );

    await Movie.create(
      {
        title: "Zootropolis",
        image: "image",
        released: "2016-03-17",
        rating: 4,
        genre: "Animated",
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
              attributes: ["name"]
            }
          }
        ]
      }
    );
  };
  const users = await User.findAll(); 
  if (users.length < 1) {
    const newUser = await User.create({
      firstName: "Test",
      lastName: "User",
      userName: "testUser",
      email: "testuser@gmail.com",
      password: "Userpassword!10"
    });
  };
  const genres = await Genre.findAll();
  if (genres.length < 1) {
    const newGenres = await Genre.bulkCreate([
      { name: "Animated" },
      { name: "Traditional" },
    ]);
  };
};

module.exports = seeder;
