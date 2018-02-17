angular.module('colorplayer')

.component('colorList', {
  bindings: {
    songs: '<',
    onClick: '<'
  },

  templateUrl: 'src/templates/colorList.html'
});