angular.module('sw').controller('StartCtrl', function($scope, $http) {
  var controller = this;


  $scope.init = function() {
    $scope.gender = "";
    $scope.season = "";
    $scope.customerInfo = {};
  };

  $scope.nextStep = function() {
    console.log('config', $scope.configuration);
  };

  $scope.genderToggleText = function(gender){
    $scope.gender = gender;
    $scope.customerInfo.gender = gender;
  };

  $scope.seasonToggleText = function(season){
    $scope.season = season;
    $scope.customerInfo.season = season;
  }

  $scope.testing = function(){
    console.log($scope.customerInfo);
  }

  $scope.init();
});