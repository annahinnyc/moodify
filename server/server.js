const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/database.js');

let app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/songs', (req, res) => {
  // Implement the logic for adding songs
});

app.get('/songs', (req, res) => {
  db.retrieve((songs) => {
    res.send(songs);
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile
