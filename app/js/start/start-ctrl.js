angular.module('sw').controller('StartCtrl', function($scope, $http) {
  var controller = this;


  $scope.init = function() {
    $scope.currentStep = 1;
  };

  $scope.nextStep = function () {
    $scope.currentStep++;
  };

  $scope.init();
});