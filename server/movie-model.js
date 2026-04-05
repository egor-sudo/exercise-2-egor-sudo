/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
   tt1375666: {
      imdbID: "tt1375666", // unique movie id
      Title: "Inception", // movie title
      Released: "2010-07-16", // release date (ISO format)
      Runtime: 148, // runtime in minutes (number)
      Genres: ["Action", "Sci-Fi"], // array of genres
      Directors: ["Christopher Nolan"], // array of directors
      Writers: ["Christopher Nolan"], // array of writers
      Actors: ["Leonardo DiCaprio"], // array of actors
      Plot: "A man enters dreams.", // short description
      Poster: "https://m.media-amazon.com/images/I/91b3Xtjt0IL._AC_SY300_SX300_QL70_ML2_.jpg", // poster URL
      Metascore: 74, // metascore (number)
      imdbRating: 8.8 // rating (number)
   },

   tt0816692: {
      imdbID: "tt0816692",
      Title: "Interstellar",
      Released: "2014-11-07",
      Runtime: 169,
      Genres: ["Drama", "Sci-Fi"],
      Directors: ["Christopher Nolan"],
      Writers: ["Christopher Nolan"],
      Actors: ["Matthew McConaughey"],
      Plot: "Space travel to save humanity.",
      Poster: "https://www.originalfilmart.com/cdn/shop/products/Interstellar_2014_advance_original_film_art_5000x.jpg?v=1600954203",
      Metascore: 74,
      imdbRating: 8.6
   },

   tt0133093: {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Released: "1999-03-31",
      Runtime: 136,
      Genres: ["Action", "Sci-Fi"],
      Directors: ["Wachowski Sisters"],
      Writers: ["Wachowski Sisters"],
      Actors: ["Keanu Reeves"],
      Plot: "A hacker discovers reality is fake.",
      Poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      Metascore: 73,
      imdbRating: 8.7
   }
};

module.exports = movies; // export movies so server.js can use them