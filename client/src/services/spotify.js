angular.module('colorplayer')

.service('spotify', function($http) {
  this.search = function(callback) {
    $http.get('https://api.spotify.com/v1/search', {

    })
    .then(function({data}) {
      if (callback) {
        callback(data);
      }
    })
    .catch(function({error}) {
      // data.errors.errors.forEach(function(err) {
      console.log('SERVICES ERROR:', error.message);
      // });
    });
  };
});