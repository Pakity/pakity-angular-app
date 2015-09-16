angular.module('sw', ['ngLodash', 'ui.router'])
    .run(function($rootScope, $state, API) {
        $rootScope.$state = $state;
        API.getAccount()
          .then(function(account) {
              $rootScope.account = account;
          });
    });
