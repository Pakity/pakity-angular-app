angular.module('sw').controller('PacksCtrl', function($rootScope, $scope, API, $state, lodash) {
  var controller = this;

  $scope.init = function() {
    $scope.customerInfo = $rootScope.customerInfo;

    API.getPacks($scope.customerInfo)
      .then(function(packs) {
        console.log('got packs', packs);
        $scope.packs = packs;
        controller.setPriceRanges(packs);
      });
  };

  $scope.selectPack = function(pack) {
    $scope.selectedPack = pack;
  };

  $scope.selectPriceRange = function(rangeId) {
    $scope.selectedRange = lodash.find($scope.ranges, function(range) {
      return range.id == rangeId;
    });

    $scope.rangePacks = $scope.selectedRange.packs;
    $state.go('packs');
  };

  controller.setPriceRanges = function(packs) {
    $scope.ranges = [{id: 0, priceRange: '$100-$300', packs:[]}, {id: 1, priceRange: '$300-$500', packs:[]}, {id: 2, priceRange: '$500+', packs:[]}];
    lodash.each(packs, function(pack) {
      if(pack.price < 300)
        $scope.ranges[0].packs.push(pack);

      if(pack.price < 500 && pack.price >= 300)
        $scope.ranges[1].packs.push(pack);

      if(pack.price >= 500)
        $scope.ranges[2].packs.push(pack);
    });
  };

  $scope.init();
});
