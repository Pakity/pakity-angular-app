angular.module('sw').controller('AccountCtrl', function($scope, API) {
  var controller = this;

  $scope.init = function() {
    API.getAccount()
      .then(function(account) {
        $scope.accout = account;
      });

    API.getMyTrips()
      .then(function(trips) {
        $scope.trips = trips;
      });
  };

  $scope.init();
});