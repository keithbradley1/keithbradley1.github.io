'use strict'
angular.module('myApp')
  .controller('PostCtrl', function($scope, $http, PostFactory, setVenueFactory, TagFactory, FirebaseFactory, $timeout) {
    const post = this;
    post.heading = 'create a post';
    post.venueName = setVenueFactory.getVenue();

    // Listener that fires get user on logout or login state of change
    firebase.auth().onAuthStateChanged(function(user) {
      // console.log("fired state of change function on FirebaseFactory.js");
      if (user) {
        post.currentUser = user;
        // console.log("user", post.currentUser);

      } else {
        currentUser = null;
      }
    });

    $scope.postVenueName = function(venueName) {
      // console.log(venueName);

      post.venueName = venueName
      // console.log(post.venueName );
      // console.log(post );
    };

    post.goToPost = (postId) => {
      TagFactory.setPostId(postId);
      $location.path("/tags");
    };

    post.submit = () => PostFactory.createPost(post.newPost).then(() => post.newPost = null);
    post.deletePost = (postId) => PostFactory.removePost(postId);
    post.editPost = () => {

    };

    PostFactory.listenPosts(data => {
      post.list = data;
      $timeout();
    });



  });

















