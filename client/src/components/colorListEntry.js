angular.module('app')

.component('colorListEntry', {
  bindings: {
    video: '<',
    onClick: '<'
  },

  controller: function() {},
  templateUrl: 'src/templates/colorListEntry.html'
});