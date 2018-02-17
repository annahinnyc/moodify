angular.module('colorplayer')

.component('colorListEntry', {
  bindings: {
    video: '<',
    onClick: '<'
  },

  templateUrl: 'src/templates/colorListEntry.html'
});