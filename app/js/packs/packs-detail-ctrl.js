angular.module('sw').controller('PacksDetailCtrl', function($scope, $stateParams, API, lodash) {
  var controller = this;

  $scope.init = function() {
    var packId = $stateParams.packId;
    console.log('packid', packId);
    $scope.pack = API.getPack(packId);
    API.getPackItems(packId)
      .then(function(items) {
        $scope.packItems = items;
        $scope.totalCost = controller.getTotalCost($scope.packItems);
        $scope.totalWeight = controller.getTotalWeight($scope.packItems);

        console.log('pack items', $scope.packItems);
      });
    console.log('selected pack', $scope.pack);
    $scope.checkboxButtonToggle = true;
  };

  $scope.updateTotals = function(item) {
    console.log('item', item);
    if(item.checked) {
      $scope.totalCost += item.price;
      $scope.totalWeight += item.weight;
    }
    else {
      $scope.totalCost -= item.price;
      $scope.totalWeight -= item.weight;
    }
  };

  controller.getTotalCost = function(packItems) {
    var total = $scope.pack.price;

    lodash.each(packItems, function(item) {
      total += item.price;
      item.checked = true;
    });

    return total;
  };

  controller.getTotalWeight = function(packItems) {
    var total = 0.0;

    lodash.each(packItems, function(item) {
      total += item.weight;
    });

    return total;
  };



  $scope.init();


});

