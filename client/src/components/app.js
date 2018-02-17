angular.module('app')

.controller('AppCtrl', function() {
  // spotify.search = (data) => {
  //   this.songs = data;
  //   // this.currentSong = this.songs[0];
  // };

  // this.selectSong = (song) => {
  //   this.currentSong = song;
  // };

  // spotify.search('color therapy', this.searchResults);
})

.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});