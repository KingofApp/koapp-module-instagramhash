angular
  .controller('instagramHashCtrl', loadFunction);

loadFunction.$inject = ['$http', '$scope', 'structureService', '$filter', '$location'];

function loadFunction($http, $scope, structureService, $filter, $location) {
  //Register upper level modules
  structureService.registerModule($location, $scope, 'instagramhash');

  $http.jsonp('https://api.instagram.com/v1/tags/' + $scope.instagramhash.modulescope.hashtag + '/media/recent?callback=JSON_CALLBACK&access_token=' + $scope.instagramhash.modulescope.accesstoken)
    .success(function(data) {
      $scope.instagramhash.items = data.data;
    }).error(function(data, error) {
      $scope.instagramhash.message = $filter('translate')('instagram.feed.error');
    });
}
