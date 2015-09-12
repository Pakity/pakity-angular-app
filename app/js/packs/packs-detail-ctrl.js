angular.module('sw').controller('PacksDetailCtrl', function($scope, $stateParams, API) {
  var controller = this;

  $scope.init = function() {
    var packId = $stateParams.packId;
    console.log('packid', packId);
    $scope.pack = API.getPack(packId);
    console.log('selected pack', $scope.pack);
    $scope.checkboxButtonToggle = true;
  };

  $scope.init();

});