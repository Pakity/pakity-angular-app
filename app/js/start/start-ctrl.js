angular.module('sw').controller('StartCtrl', function($scope, $http) {
  var controller = this;


  $scope.init = function() {
    $scope.configuration = {};
    $scope.mainOptions = [
      {id: 1, name: 'Backpack'},
      {id: 2, name: 'Camp'}
    ];
  };

  $scope.nextStep = function() {
    console.log('config', $scope.configuration);
  };

  $scope.init();
});