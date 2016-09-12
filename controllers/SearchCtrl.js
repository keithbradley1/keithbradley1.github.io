 'use strict'
angular.module('myApp')
  .controller('SearchCtrl', function($scope, SearchFactory, PostFactory, FirebaseFactory, $timeout, setVenueFactory){
    const search = this;

    search.heading = 'find a restaurant';


    // Listener that fires get user on logout or login state of change
    firebase.auth().onAuthStateChanged(function(user) {
      // console.log("fired state of change function on FirebaseFactory.js");
      if (user) {
        search.currentUser = user;
        // console.log("user", search.currentUser);

      } else {
        currentUser = null;
      }
    });

    $scope.fetch = function (){
      // console.log("click")
      SearchFactory.getAPISearch($scope.name, $scope.near)
      .then(
        function (response) {
          $scope.details = response
          // console.log("response", response);
        })
    }
    search.chooseVenue = (restaurant) => {
      setVenueFactory.setVenue(restaurant);
    }
  })
