angular.module('sw', ['ngLodash', 'ui.router','ng-token-auth'])
    .run(function($rootScope, $state, API) {
        $rootScope.$state = $state;
        API.getAccount()
          .then(function(account) {
              $rootScope.account = account;
          });
    });
