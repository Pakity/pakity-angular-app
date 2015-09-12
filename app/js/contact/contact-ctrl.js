angular.module('sw').controller('ContactCtrl', function($scope, $http) {
  var controller = this;


  $scope.init = function() {
    $scope.contactSubmitForm = true;
    $scope.contactSubmitMessage = false;
  };

  $scope.init();

  $scope.submitContactForm = function(){
    $scope.contactSubmitForm = false;
    $scope.contactSubmitMessage = true;
  }
});