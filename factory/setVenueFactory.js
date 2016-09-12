'use strict';
  angular.module('myApp')
    .factory('setVenueFactory', (FirebaseFactory) => {
      let venue = null;

      return {
        setVenue: (newVenue) => {
          venue = newVenue;
        },

        getVenue: () => {
          return venue;
        }
      }

  });
