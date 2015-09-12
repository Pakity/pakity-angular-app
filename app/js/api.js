angular.module('sw').factory('API', function(lodash) {

  function getPacks() {
    return [
          {id: 1, weight: 50, volume: 50, price: 121.14, name: 'Pack 1', url: 'www.google.com'},
          {id: 2, weight: 51, volume: 51, price: 131.14, name: 'Pack 2', url: 'www.google.com'},
          {id: 3, weight: 52, volume: 52, price: 141.14, name: 'Pack 3', url: 'www.google.com'},
          {id: 4, weight: 53, volume: 53, price: 151.14, name: 'Pack 4', url: 'www.google.com'},
          {id: 5, weight: 54, volume: 54, price: 161.14, name: 'Pack 5', url: 'www.google.com'},
          {id: 6, weight: 55, volume: 55, price: 171.14, name: 'Pack 6', url: 'www.google.com'},
          {id: 7, weight: 56, volume: 56, price: 181.14, name: 'Pack 7', url: 'www.google.com'},
          {id: 8, weight: 57, volume: 57, price: 191.14, name: 'Pack 8', url: 'www.google.com'},
          {id: 9, weight: 58, volume: 58, price: 201.14, name: 'Pack 9', url: 'www.google.com'},
          {id: 10, weight: 59, volume: 59, price: 211.14, name: 'Pack 10', url: 'www.google.com'},
          {id: 11, weight: 60, volume: 60, price: 221.14, name: 'Pack 11', url: 'www.google.com'}
        ];
  }

  function getPack(packId){
    var packs = getPacks();
    return lodash.find(packs, function(pack) {
      return pack.id == packId;
    });
  }

  return {
    getPacks: getPacks,
    getPack: getPack
  };
});