const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/songs', { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
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

module.exports = {

  selectAll: () => {
    return Song.find({}).exec();
  },

  retrieve: (songId) => {
    // Implement the retrieve logic
    // Return a promise that resolves with the retrieved data
  },

  save: (spotifyData) => {
    // Implement the save logic
    // Return a promise that resolves when the data is saved
  }

};
