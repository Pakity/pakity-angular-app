angular.module('sw').factory('API', function(lodash, $http) {
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
    postCustomerInfo: postCustomerInfo
  };
});