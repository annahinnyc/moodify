angular.module('app')

.component('colorList', {
  bindings: {
    songs: '<',
    onClick: '<'
  },

  controller: function() {},
  templateUrl: 'src/templates/colorList.html'
});