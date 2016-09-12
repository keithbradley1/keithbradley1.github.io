'use strict';
  angular.module('myApp')
    .factory('PostFactory', (FirebaseFactory, setVenueFactory, SearchFactory) => {
      let currentUserId = "";

      return {
        setUserId: uid => currentUserId = uid,
        listenPosts: listener => FirebaseFactory.listenPosts(post => {
          for(const bid in post) {
            if(post[bid].uid !== currentUserId) {
              delete post[bid];
            }
          }
          listener(post);
        }),
        removePost: postId => FirebaseFactory.deleteUserPosts(postId),
        createPost: newPost =>
          FirebaseFactory.postPost(Object.assign(newPost, {uid:currentUserId}))
      };

  });
