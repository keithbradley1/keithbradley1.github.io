angular.module('myApp')
  .factory('FirebaseFactory', ($location, $timeout) => {
    const db = firebase.database();
    const postsRef = db.ref("posts");
    const tagsRef = db.ref("tags");
    const usersRef = db.ref("users");

    let currentUser = null
    // Listener that fires route to search-page on logout or login state of change
    firebase.auth().onAuthStateChanged(function(user) {
      // console.log("fired state of change function on FirebaseFactory.js");
      if (user) {
        currentUser = user;
        $location.path('/search');
        $timeout()
      } else {
        currentUser = null;
        $location.path('/');
        $timeout()
      }
    });

    return {
      getUser: () => currentUsr,

      getTag: id => db.ref(`tags/${id}`).once("value").then(snapshot => snapshot.val()),
      listenTags: listener => tagsRef.on("value", snapshot => listener(snapshot.val())),
      postTag: tag => $timeout().then(() => {
        const newKeyId = tagsRef.push().key;
        tagsRef.update({[newKeyId]:tag});
      }),
      deleteTag: id => tagsRef.child(id).remove(),

      getPost: id => db.ref(`posts/${id}`).once("value").then(snapshot => snapshot.val()),
      listenPosts: listener => postsRef.on("value", snapshot => listener(snapshot.val())),
      postPost: post => $timeout().then(() => {
        const newKeyId = postsRef.push().key;
        postsRef.update({[newKeyId]:post});
      }),
      deleteUserPosts: id => postsRef.child(id).remove()
    };

})







