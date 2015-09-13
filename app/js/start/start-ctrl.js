angular.module('sw').controller('StartCtrl', function($rootScope, $scope, API, $state,$location, $anchorScroll) {
  var controller = this;


  $scope.init = function() {
    $scope.gender = "";
    $scope.season = "";
    $scope.customerInfo = {};
    $location.hash('topContainer');
    $anchorScroll();
  };

  $scope.nextStep = function() {
    console.log('config', $scope.configuration);
  };

  $scope.genderToggleText = function(gender){
    $scope.gender = (gender == 'Men') ? 'Male' : 'Female';
    $scope.customerInfo.gender = gender;
  };

  $scope.seasonToggleText = function(season){
    $scope.season = season;
    $scope.customerInfo.season = season;
  };

  $scope.scrollToInfo = function(){
    $location.hash('infoSection');
    $anchorScroll();
  };

  $scope.testing = function(){
    console.log($scope.customerInfo);
    $rootScope.customerInfo = $scope.customerInfo;
    $state.go('packs');
  };

  $scope.init();
});