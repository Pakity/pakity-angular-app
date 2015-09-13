angular.module('sw').factory('API', function(lodash, $http, $q) {
  var urlRoot = 'https://shielded-sea-9585.herokuapp.com/';
  function getPacks(data) {
    console.log('data', data);
    var url = urlRoot + 'backpack';
      url += '?torso=' + data.torsoSize || 1;
      url += '&waist=' + data.waistSize || 1;
      url += '&gender=' + data.gender || 'female';
      url += '&start=' + 1;
      url += '&end=' + 1;

    return $http.get(url);
  }

  function getFakeData() {
    return {"backpacks": [
      {"url": "http://www.rei.com/product/878451/osprey-atmos-65-ag-pack", "gender": {"id": 1, "name": "Men"}, "price": 259.95, "brand": {"id": 1, "name": "Osprey"}, "url_img": "http://www.rei.com/zoom/nn/333921ad-d28e-416a-8d3f-130662ac0bfd.jpg/440", "id": 1, "frame_type": {"id": 1, "name": "Internal"}, "name": "Atmos 65 AG Pack"},
      {"url": "http://www.rei.com/product/846442/osprey-ariel-65-pack-womens", "gender": {"id": 2, "name": "Women"}, "price": 289.95, "brand": {"id": 1, "name": "Osprey"}, "url_img": "http://www.rei.com/zoom/ss/5c68885c-bd4b-4883-ab2e-a092fcb529bd.jpg/440", "id": 2, "frame_type": {"id": 1, "name": "Internal"}, "name": "Ariel 65 Pack"}]}
  }

  function getPack(packId){
    var packs = getPacks();
    return lodash.find(packs, function(pack) {
      return pack.id == packId;
    });
  }

  function postCustomerInfo(data) {
    return $http.post('www.google.com', data);
  }

  return {
    packs: undefined,
    getPacks: function(data) {
      var that = this;
      var deferred = $q.defer();

      if(!data) {
        var data = getFakeData();
        that.packs = data.backpacks;
        deferred.resolve(data.backpacks);

        return deferred.promise;
      }

      var url = urlRoot + 'backpack';
        url += '?torso=' + data.torsoSize || 1;
        url += '&waist=' + data.waistSize || 1;
        url += '&gender=' + data.gender || 'female';
        url += '&start=' + 1;
        url += '&end=' + 1;

      return $http.get(url)
        .then(function(response) {
          that.packs = response.data.backpacks;
        });
    },
    getPack: function(packId) {
      var that = this;
      return lodash.find(that.packs, function(pack) {
        return pack.id == packId;
      });
    },
    postCustomerInfo: postCustomerInfo,
    getPackItems: function(packId) {
      var deferred = $q.defer();
      var items = [
        {id: 1, name: 'Socks', weight: 10, price: 10.12},
        {id: 2, name: 'Shirts', weight: 22, price: 15.11},
        {id: 3, name: 'Flashlight', weight: 30, price: 22.45},
        {id: 4, name: 'Notebook', weight: 5, price: 5.00}
      ];

      deferred.resolve(items);

      return deferred.promise;
    },
    getAccount: function() {
      var deferred = $q.defer();

      var account = {
        id: 1,
        email: 'kim@pakity.com',
        joinDate: '1442096051'
      };

      deferred.resolve(account);

      return deferred.promise;
    },
    getMyTrips: function() {
      var deferred = $q.defer();

      var trips = [
        {id: 1, season: 'Fall', city: 'Salt Lake City', state: 'Utah', date: '1442096051', pack: {"url": "http://www.rei.com/product/846442/osprey-ariel-65-pack-womens", "gender": {"id": 2, "name": "Women"}, "price": 289.95, "brand": {"id": 1, "name": "Osprey"}, "url_img": "http://www.rei.com/zoom/ss/5c68885c-bd4b-4883-ab2e-a092fcb529bd.jpg/440", "id": 2, "frame_type": {"id": 1, "name": "Internal"}, "name": "Ariel 65 Pack"}},
        {id: 2, season: 'Summer', city: 'Duluth', state: 'Minnesota', date: '1342096051', pack: {"url": "http://www.rei.com/product/878451/osprey-atmos-65-ag-pack", "gender": {"id": 1, "name": "Men"}, "price": 259.95, "brand": {"id": 1, "name": "Osprey"}, "url_img": "http://www.rei.com/zoom/nn/333921ad-d28e-416a-8d3f-130662ac0bfd.jpg/440", "id": 1, "frame_type": {"id": 1, "name": "Internal"}, "name": "Atmos 65 AG Pack"}}
      ];

      deferred.resolve(trips);

      return deferred.promise;
    }
  };
});