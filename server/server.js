// var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');
var songs = require('../database/database.js')
var app = express();

var port = 3000;

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = 3000;

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/../client/index.html');
// });

app.get('/songs', function(req, res) {
  songs.selectAll(function(err, data) {
    if (err) { console.log('GET error:', error); }
    else {
      res.json(data);
    console.log('APP GET response:', res);
    }
  });

});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
