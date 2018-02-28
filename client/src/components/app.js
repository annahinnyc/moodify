angular.module('colorplayer')

.controller('AppCtrl', (songService) => {
  songService.getAll((data) => {
    this.songs = data;
    // this.currentSong = this.songs[0];
  });
  this.handleClick = () =>{
    this.service.search(this.input, function() {
      this.result(data);
    });
  };
  // this.selectSong = (song) => {
  //   this.currentSong = song;
  // };

  // spotify.search('color therapy', this.searchResults);
})

.component('colorplayer', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});

