angular.module('sw').config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('empty', {
      url: '/empty',
      templateUrl: 'js/empty/empty.html',
      controller: 'EmptyCtrl'
    });

  $urlRouterProvider.otherwise('/');
});