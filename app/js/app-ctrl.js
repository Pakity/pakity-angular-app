angular.module('sw').controller('AppCtrl', function($scope, $document, $http, $log) {
  $log.info("AppCtrl");
  $scope.init = function() {
        $scope.urls = {
            facebook: "https://www.facebook.com/pakitybackpacking",
            twitter: "https://www.twitter.com/pakitybackpack1",
            instagram: "https://instagram.com/pakitybackpacks/",
            pinterest: "https://www.pinterest.com/pakitybackpacks/"
        };
        $document.ready(function() {
            $('.parallax').parallax();
        });
        var facebook_like_count_api = "https://api.facebook.com/method/fql.query?query=select%20like_count%20from%20link_stat%20where%20url=%27https://www.facebook.com/pakitybackpacking/%27&format=json";
        $http.get(facebook_like_count_api)
            .then(function (response) {
                $log.debug("response", response);
                $scope.facebookLikeCount = response.data[0].like_count;
            });
  };

  $scope.init();
});
