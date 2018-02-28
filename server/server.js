const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const db = require('../database/database.js');
const helpers = require('../client/src/services/spotify.js');
const scope = `user-read-private user-read-email user-read-playback-state`;
let app = express();

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/songs', (req, res) => {
  console.log('trying to post!');
  // request.get('https://itunes.apple.com/search?term=' + 'yellow' + 'mood&limit=10', function(err, res) {
  //   // console.log(res);
  //   if (err) { console.log('itunes search server error:', err); }
  //   else {
  //     console.log('itunes response:', res);
  //     //db.save(res);

  //   }
  // });
  // res.send('hello');

});


app.get('/songs', (req, res) => {
  // db.selectAll(function(err, data) {
  //   if (err) { console.log('GET error:', error); }
  //   else {
  //     res.json(data);
  //   console.log('APP GET response:', res);
  //   }
  // });
  db.retrieve((songs) => {
    res.send(songs);
  });

});

let PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
