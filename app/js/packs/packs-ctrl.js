angular.module('sw').controller('PacksCtrl', function($rootScope, $scope, API, $state) {
  var controller = this;

  $scope.init = function() {
    $scope.customerInfo = $rootScope.customerInfo;

    API.getPacks($scope.customerInfo)
      .then(function() {
        $scope.packs = API.packs;
      });
  };

  $scope.selectPack = function(pack) {
    $scope.selectedPack = pack;
  };

  $scope.init();
});
