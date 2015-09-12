angular.module('sw', ['ngLodash', 'ui.router'])
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
$(document).ready(function() {
    $('.parallax').parallax();



});

(function() {
    var facebook_like_count_api = "https://api.facebook.com/method/fql.query?query=select%20like_count%20from%20link_stat%20where%20url=%27https://www.facebook.com/pakitybackpacking/%27&format=json";
    $.getJSON(facebook_like_count_api, {
            format: "json"
        })
        .done(function(data) {
            $.each(data, function() {
                var key = Object.keys(this)[0];
                var value = this[key];
                $('#likeNum').text(value);
            });
        });
})();
