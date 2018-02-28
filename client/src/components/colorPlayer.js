angular.module('colorplayer', [])

.controller('ColorPlayerCtrl', () => {
  // this.spotifyEmbedUrl = (songId) => {
  //   return this.song ? `external_urls.spotify${}` : '';
  // };
})

.component('colorPlayer', {
  controller: 'ColorPlayerCtrl',
  bindings: {
    song: '<'
  },
  templateUrl: 'src/templates/colorPlayer.html'
});