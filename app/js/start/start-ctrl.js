angular.module('sw').controller('StartCtrl', function($scope, $http) {
  var controller = this;


  $scope.init = function() {
    $scope.gender = "";
    $scope.configuration = {};
  };

  $scope.nextStep = function() {
    console.log('config', $scope.configuration);
  };

  $scope.genderToggleText = function(gender){
    $scope.gender = gender;
  };

  $scope.init();
});