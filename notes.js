









// angular.module('app')
//   .factory('PostFactory', function() {
//     let venue = null;

//     return {
//       setVenue: (newVenue) => {
//         venue = newVenue;
//       }

//       getVenue: () => {
//         return venue;
//       }
//     }
//   })

//   ================

//   SearchCtrl: (inject PostFactory)

//   Logic -
//     search.chooseVenue = (restaurant) => {
//       PostFactory.setVenue(restaurant);
//     }

//   Template -

//     ng-click="search.chooseVenue(object.venueName)"

//   =================

//   PostCtrl: (inject PostFactory)

//   post.venueName = PostFactory.getVenue();