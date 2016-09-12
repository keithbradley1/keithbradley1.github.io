'use strict';
  angular.module('myApp')
    .factory('SearchFactory', function($http){
      return {
        getAPISearch: function (name, near) {
        return $http.get(`https://api.foursquare.com/v2/venues/search?client_id=DADTEOVA0EOTGPS4X5A3IJK3FQCVDK5O5CQ4OF3N1KBWQVBM&client_secret=P2VTMNQVH1OPBK0VXIFQIOMFWZPBR4SAPZXYSUBEULLLVIMU&v=20130815&near=${near}&query=${name}`)
        }
      }


    });
