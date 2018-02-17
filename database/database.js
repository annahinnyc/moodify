const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/songs');

let db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

let songSchema = mongoose.Schema({
  id: Number,
  name: String,
  song_url: String,
  color: String
});

songSchema.plugin(uniqueValidator);
let Song = mongoose.model('Song', songSchema);

let selectAll = function(callback) {
  Song.find({}, function(err, songs) {
    if (err) { callback(err, null); }
    else { callback(null, songs); }
  });
};

module.exports.selectAll = selectAll;
