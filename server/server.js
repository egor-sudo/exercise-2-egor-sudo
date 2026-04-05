const express = require('express'); // import express framework
const path = require('path'); // path utilities
const bodyParser = require('body-parser'); // parse JSON from requests
const movieModel = require('./movie-model.js'); // import movie data

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); // allow reading JSON from request body

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and return the movies from 
     the model as an array */

  res.json(Object.values(movieModel)); // convert object → array and send JSON
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */

  const id = req.params.imdbID; // get id from URL
  const movie = movieModel[id]; // find movie in model

  if (movie) {
    res.json(movie); // send movie if found
  } else {
    res.sendStatus(404); // send 404 if not found
  }
})

/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.put('/movies/:imdbID', function (req, res) {

  const id = req.params.imdbID;
  const newData = req.body;

  const existing = movieModel[id];

  if (existing) {
    // merge old + new (НЕ теряем данные)
    movieModel[id] = {
      ...existing,
      ...newData
    };

    res.sendStatus(200);
  } else {
    movieModel[id] = newData;
    res.status(201).json(newData);
  }

});

app.listen(3000);

console.log("Server now listening on http://localhost:3000/");