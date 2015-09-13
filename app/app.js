angular.module('sw', ['ngLodash', 'ui.router'])
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
