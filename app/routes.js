angular.module('sw').config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/js/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('empty', {
      url: '/empty',
      templateUrl: '/app/js/empty/empty.html',
      controller: 'EmptyCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/app/js/contact/contact.html',
      controller: 'ContactCtrl'
    })
    .state('start', {
      url: '/start',
      templateUrl: '/app/js/start/start.html',
      controller: 'StartCtrl'
    });

  $urlRouterProvider.otherwise('/');
});