angular.module('sw').controller('PacksCtrl', function($scope, API) {
  var controller = this;

  $scope.init = function() {
    $scope.packs = API.getPacks();
  };

  $scope.selectPack = function(pack) {
    $scope.selectedPack = pack;
  };

  $scope.init();
});
