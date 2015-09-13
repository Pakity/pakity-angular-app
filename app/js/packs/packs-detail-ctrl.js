angular.module('sw').controller('PacksDetailCtrl', function($scope, $stateParams, API, lodash) {
  var controller = this;


  $scope.init = function() {
    var packId = $stateParams.packId;
    $scope.packageId = 1;
    console.log('packid', packId);
    $scope.pack = API.getPack(packId);
    API.getPackItems($scope.packageId)
      .then(function(items) {
        controller.setPackItems(items);
        console.log('pack items', $scope.packItems);
      });

    controller.setAllPackages();
    console.log('selected pack', $scope.pack);
    $scope.selectUrl = $scope.pack.url_img;
    $scope.checkboxButtonToggle = true;
  };

  $scope.updateTotals = function(item) {
    console.log('item', item);
    if(item.checked) {
      item.listStatus = "";
      item.disableDontWantBtn = false;
      item.dontWantBtnClick = false;
      $scope.totalCost += item.gear.price;
      $scope.totalWeight += item.gear.weight;
    }
    else {
      $scope.totalCost -= item.gear.price;
      $scope.totalWeight -= item.gear.weight;
    }
  };

  $scope.selectPackage = function(packageId) {
    console.log('new package', packageId);
    var items = $scope.packages[packageId - 1];
    controller.setPackItems(items);
  };

  controller.setAllPackages = function() {
    $scope.packages = [];

    API.getPackItems(1)
      .then(function(items) {
        $scope.packages.push(items);
      });

    API.getPackItems(2)
      .then(function(items) {
        $scope.packages.push(items);
      });

    API.getPackItems(3)
      .then(function(items) {
        $scope.packages.push(items);
      });
  };

  controller.getTotalCost = function(packItems) {
    var total = $scope.pack.price;

    lodash.each(packItems, function(item) {
      total += item.gear.price;
      item.checked = true;
    });

    return total;
  };

  controller.getTotalWeight = function(packItems) {
    var total = 0.0;

    lodash.each(packItems, function(item) {
      total += item.gear.weight;
    });

    return total+40;
  };

  controller.setPackItems = function (items) {
    $scope.packItems = items;
    console.log('packItems', $scope.packItems);
    $scope.totalCost = controller.getTotalCost($scope.packItems);
    $scope.totalWeight = controller.getTotalWeight($scope.packItems);
  };

  $scope.selectedItemUrl = function(url){
    $scope.selectUrl = url;
  };

  $scope.alreadyHaveBtn = function(item){
    item.listStatus = "alreadyHave";
    item.disableDontWantBtn = true;
  };

  $scope.dontWantBtn = function(item){
    item.listStatus = "strike";
    item.disableDontWantBtn = true;
    item.dontWantBtnClick = true;
  };

  $scope.init();


});

