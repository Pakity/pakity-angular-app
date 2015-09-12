angular.module('sw', ['ngLodash', 'ui.router'])
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
$(document).ready(function() {
    $('.parallax').parallax();
});
