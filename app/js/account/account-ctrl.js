angular.module('sw').controller('AccountCtrl', function($scope, API, lodash) {
    var controller = this;

    $scope.init = function() {
        API.getPackItems(1)
            .then(function(items) {
                controller.setPackItems(items);
                console.log('pack items', $scope.packItems);

                controller.loadEquipment($scope.packItems);
            });

        API.getAccount()
            .then(function(account) {
                $scope.accout = account;
            });

        API.getMyTrips()
            .then(function(trips) {
                $scope.trips = trips;
            });
        API.getPacks($scope.customerInfo)
            .then(function(response) {
                $scope.packs = API.packs;
                console.log('packs', $scope.packs);
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

        return total + 40;
    };

    controller.setPackItems = function(items) {
        $scope.packItems = items;
        console.log('packItems', $scope.packItems);

        $scope.totalWeight = controller.getTotalWeight($scope.packItems);

    };

    controller.loadEquipment = function(packItems) {
        $('tbody').html('');
        lodash.each(packItems, function(item) {

            $('tbody').append('<tr>' +
                '<td>' + item.category.name + '</td>' +
                '<td>' + item.gear.name + '</td>' +
                '<td><img src="' + item.gear.url_img + '" alt="" class="circle" height="75" /></td>' +
                '<td>' + item.gear.weight + '</td>' +
                '</tr>');

        });
        $('span.pack-weight').html(controller.getTotalWeight($scope.packItems) + '(oz)');

    };


    $scope.init();
});
